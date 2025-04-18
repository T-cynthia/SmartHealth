const Nurse = require('../models/Nurse');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const { nurseName, phone, address, password } = req.body;

    // Validation
    if (!nurseName || !phone || !address || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if nurse already exists (by phone or name, depending on your model)
    const existingNurse = await Nurse.findOne({ phone });
    if (existingNurse) {
      return res.status(400).json({ message: 'Nurse already registered' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create nurse
    const newNurse = new Nurse({
      nurseName,
      phone,
      address,
      password: hashedPassword
    });

    // Save nurse
    await newNurse.save();

    return res.status(201).json({ message: 'Nurse registered successfully' });
  } catch (error) {
    console.error('❌ Registration Error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { register };
