const Newborn = require('../models/Newborns');

// Register a newborn
const registerNewborn = async (req, res) => {
  try {
    const { name, dob, gender, parent } = req.body;

    // Basic validation
    if (!name || !dob || !gender || !parent) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newborn = new Newborn({ name, dob, gender, parent });
    await newborn.save();

    res.status(201).json({ message: 'Newborn registered successfully', newborn });
  } catch (error) {
    console.error('Error registering newborn:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all newborns
const getAllNewborns = async (req, res) => {
  try {
    const newborns = await Newborn.find().sort({ createdAt: -1 });
    res.status(200).json(newborns);
  } catch (error) {
    console.error('Error fetching newborns:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  registerNewborn,
  getAllNewborns,
};
