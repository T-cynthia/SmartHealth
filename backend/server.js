// server.js
const express = require('express');
const { connectToMongo, client } = require('./index');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Nodemailer config
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sayinzogae@gmail.com',
    pass: 'fqib qxxq mory ewxa'
  }
});


// ✅ Register route
app.post('/register', async (req, res) => {
  try {
    const { fullName, email, password, phone, baby } = req.body;

    const existing = await Parent.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newParent = new Parent({
      fullName,
      email,
      password: hashedPassword,
      phone,
      baby
    });

    await newParent.save();

    const verificationLink = `http://localhost:5000/verify-email/${newParent._id}`;
    const mailOptions = {
      from: 'sayinzogae@gmail.com',
      to: email,
      subject: 'Verify Your Email - SmartHealth',
      text: `Hello ${fullName},\n\nPlease verify your email by clicking the link below:\n${verificationLink}\n\nThank you!`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Registration successful. Please check your email to verify your account.' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Verify Email route
app.get('/verify-email/:id', async (req, res) => {
  try {
    const parent = await Parent.findById(req.params.id);
    if (!parent) return res.status(404).send('Parent not found');

    parent.verified = true;
    await parent.save();

    res.send('✅ Email verified successfully! You can now log in.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error during email verification');
  }
});

// ✅ Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const parent = await Parent.findOne({ email });
    if (!parent) return res.status(404).json({ message: 'Email not found. Please register first.' });

    const isMatch = await bcrypt.compare(password, parent.password);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect password. Please try again.' });

    if (!parent.verified) return res.status(403).json({ message: 'Please verify your email before logging in.' });

    res.status(200).json({
      message: 'Login successful',
      parent: {
        id: parent._id,
        fullName: parent.fullName,
        email: parent.email,
        phone: parent.phone,
        baby: parent.baby
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Cron job: Daily vaccination reminders
cron.schedule('0 9 * * *', async () => {
  try {
    const parents = await Parent.find({});
    const today = new Date().toISOString().split('T')[0];

    for (const parent of parents) {
      const dob = new Date(parent.baby.dateOfBirth);
      const reminderDate = new Date(dob);
      reminderDate.setDate(dob.getDate() + 30);
      const formattedReminder = reminderDate.toISOString().split('T')[0];

      if (formattedReminder === today) {
        const mailOptions = {
          from: 'sayinzogae@gmail.com',
          to: parent.email,
          subject: 'Vaccination Reminder',
          text: `Hello ${parent.fullName},\n\nIt's time for your baby ${parent.baby.fullName}'s first vaccination!\nPlease visit your nearest clinic today.\n\nSmartHealth`
        };

        await transporter.sendMail(mailOptions);
        console.log(`Reminder sent to ${parent.email}`);
      }
    }
  } catch (err) {
    console.error('Error in cron job:', err);
  }
});

// ✅ Test on server start (optional)
async function testVaccinationReminder() {
  try {
    const parents = await Parent.find({});
    const today = new Date().toISOString().split('T')[0];

    for (const parent of parents) {
      const dob = new Date(parent.baby.dateOfBirth);
      const reminderDate = new Date(dob);
      reminderDate.setDate(dob.getDate() + 30);
      const formattedReminder = reminderDate.toISOString().split('T')[0];

      if (formattedReminder === today) {
        const mailOptions = {
          from: 'sayinzogae@gmail.com',
          to: parent.email,
          subject: 'Vaccination Reminder',
          text: `Hello ${parent.fullName},\n\nIt's time for your baby ${parent.baby.fullName}'s first vaccination!\nPlease visit your nearest clinic today.\n\nSmartHealth`
        };

        await transporter.sendMail(mailOptions);
        console.log(`Reminder sent to ${parent.email}`);
      }
    }
  } catch (err) {
    console.error('Error sending test reminder:', err);
  }
}

testVaccinationReminder();

// Connect once at startup
(async () => {
    try {
      await connectToMongo();
    } catch (err) {
      console.error("❌ Failed to connect to MongoDB Atlas:", err);
      process.exit(1);
    }
  })();