const Newborn = require('../models/Newborn');

// Get all newborns
exports.getAllNewborns = async (req, res) => {
  try {
    const newborns = await Newborn.find();
    res.json(newborns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
