// controllers/parentController.js

const Parent = require('../models/Parent');

// Get all parents
const getAllParents = async (req, res) => {
  try {
    const parents = await Parent.find(); // Fetch all parents from DB
    res.json(parents);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching parents', error: err });
  }
};

const registerParent = async (req, res) => {
    const { fullName, password, phone } = req.body;
  
    // Validate the incoming request
    if (!fullName || !password) {
      return res.status(400).json({ message: "Full name and password are required." });
    }
  
    try {
      // Create a new parent document
      const newParent = new Parent({ fullName, password, phone });
  
      // Save to database
      await newParent.save();
  
      // Return success response
      res.status(201).json(newParent);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error while registering parent.", error: err });
    }
  };

module.exports = { getAllParents, registerParent };
