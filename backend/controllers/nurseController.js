const Nurse = require('../models/Nurse');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// Register Nurse
const register = async (req, res) => {
  try {
    const { nurseName, phone, address, password } = req.body;

    if (!nurseName || !phone || !address || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingNurse = await Nurse.findOne({ phone });
    if (existingNurse) {
      return res.status(409).json({ message: 'Nurse already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const nurse = new Nurse({ nurseName, phone, address, password: hashedPassword });
    await nurse.save();

    res.status(201).json({ message: 'Nurse registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
    try {
      const { phone, password } = req.body;
  
      if (!phone || !password) {
        return res.status(400).json({ message: 'Phone and password are required' });
      }
  
      const nurse = await Nurse.findOne({ phone });
  
      if (!nurse) {
        return res.status(404).json({ message: 'Nurse not found' });
      }
  
      const isMatch = await bcrypt.compare(password, nurse.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // 🟢 Send back nurse info (excluding password)
      const { password: _, ...nurseInfo } = nurse.toObject();
      res.status(200).json({ message: 'Login successful', nurse: nurseInfo });
      
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  

module.exports = {
  register,
  login,
};
