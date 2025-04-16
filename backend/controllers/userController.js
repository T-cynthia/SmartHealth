const bcrypt = require('bcryptjs');
const Parent = require('../models/Parent');
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
    const { fullName, email, password, phone, baby } = req.body;

    const existing = await Parent.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newParent = new Parent({ fullName, email, password: hashedPassword, phone, baby });
    await newParent.save();

    const verificationLink = `http://localhost:5000/verify-email/${newParent._id}`;
    await transporter.sendMail({
      from: 'sayinzogae@gmail.com',
      to: email,
      subject: 'Verify Your Email - SmartHealth',
      text: `Hello ${fullName},\n\nVerify here: ${verificationLink}`
    });

    res.status(201).json({ message: 'Registration successful. Check email to verify.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const parent = await Parent.findById(req.params.id);
    if (!parent) return res.status(404).send('Parent not found');

    parent.verified = true;
    await parent.save();
    res.send('✅ Email verified! You can now log in.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error during email verification');
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const parent = await Parent.findOne({ email });
    if (!parent) return res.status(404).json({ message: 'Email not found' });

    const isMatch = await bcrypt.compare(password, parent.password);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });
    if (!parent.verified) return res.status(403).json({ message: 'Please verify your email' });

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
};
