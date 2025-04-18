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

// nurseController.js
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
  
      // ✅ Send nurse data in response
      res.status(200).json({ message: 'Login successful', nurse });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  const getAllNurses = async (req, res) => {
    try {
      const nurses = await Nurse.find();
      res.status(200).json(nurses);
    } catch (error) {
      console.error('Error fetching nurses:', error);
      res.status(500).json({ message: 'Failed to fetch nurses' });
    }
  };
  // Edit an existing nurse
const editNurse = async (req, res) => {
    const { id } = req.params;
    const { nurseName, phone, password, address } = req.body;
  
    try {
      const nurse = await Nurse.findById(id);
      if (!nurse) {
        return res.status(404).json({ message: 'Nurse not found' });
      }
  
      // Update nurse details
      nurse.nurseName = nurseName || nurse.nurseName;
      nurse.phone = phone || nurse.phone;
      nurse.address = address || nurse.address;
      
      // If password is updated, hash it
      if (password) {
        nurse.password = await bcrypt.hash(password, 10);
      }
  
      await nurse.save();
      res.status(200).json({ message: 'Nurse updated successfully', nurse });
    } catch (err) {
      console.error('Failed to update nurse', err);
      res.status(500).json({ message: 'Server error during update' });
    }
  };
  
  // Delete a nurse
   const deleteNurse = async (req, res) => {
    const { id } = req.params;
    try {
      const nurse = await Nurse.findById(id);
      if (!nurse) {
        return res.status(404).json({ message: 'Nurse not found' });
      }
  
      await nurse.deleteOne();
      res.status(200).json({ message: 'Nurse deleted successfully' });
    } catch (err) {
      console.error('Failed to delete nurse', err);
      res.status(500).json({ message: 'Server error during delete' });
    }
  };

module.exports = {
  register,
  login,
  getAllNurses,
  editNurse,
  deleteNurse,
};
