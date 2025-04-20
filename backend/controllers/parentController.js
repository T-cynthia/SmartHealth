const Newborn = require('../models/Newborn');

const parentLogin = async (req, res) => {
  const { fullName, phone } = req.body;

  try {
    const match = await Newborn.findOne({
      $or: [
        { motherName: fullName, motherPhone: phone },
        { fatherName: fullName, fatherPhone: phone }
      ]
    });

    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', parent: fullName });
  } catch (error) {
    console.error('Parent login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { parentLogin };
