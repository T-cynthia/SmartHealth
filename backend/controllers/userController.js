// controllers/userController.js
const bcrypt = require('bcryptjs');
const Family = require('../models/Family');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sayinzogae@gmail.com',
    pass: 'fqib qxxq mory ewxa'
  }
});

exports.register = async (req, res) => {
  try {
    const {
      motherName, motherEmail, motherPhone,
      fatherName, fatherEmail, fatherPhone,
      childName, dob, gender, weight,
      height, bloodType, deliveryMethod,
      doctor, password
    } = req.body;

    if (!req.body) {
      return res.status(400).json({ message: 'Request body is missing' });
    }

    const existing = await Family.findOne({ motherEmail });
    if (existing) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newFamily = new Family({
      motherName, motherEmail, motherPhone,
      fatherName, fatherEmail, fatherPhone,
      childName, dob, gender, weight,
      height, bloodType, deliveryMethod,
      doctor, password: hashedPassword
    });

    await newFamily.save();

    const verificationLink = `http://localhost:5000/api/users/verify-email/${newFamily._id}`;
    await transporter.sendMail({
      from: 'sayinzogae@gmail.com',
      to: motherEmail,
      subject: 'Verify Your Email - SmartHealth',
      text: `Hello ${motherName},\n\nVerify here: ${verificationLink}`
    });

    res.status(201).json({ message: 'Registration successful. Check your email to verify.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const family = await Family.findById(req.params.id);
    if (!family) return res.status(404).send('User not found');

    family.verified = true;
    await family.save();
    res.send('✅ Email verified! You can now log in.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error during email verification');
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const family = await Family.findOne({ motherEmail: email });
    if (!family) return res.status(404).json({ message: 'Email not found' });

    const isMatch = await bcrypt.compare(password, family.password);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });
    if (!family.verified) return res.status(403).json({ message: 'Please verify your email' });

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: family._id,
        motherName: family.motherName,
        motherEmail: family.motherEmail,
        childName: family.childName,
        gender: family.gender,
        doctor: family.doctor
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
