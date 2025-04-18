const User = require('../models/User');  // Update to use User model

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { fullName, password, phone } = req.body;

    const newUser = new User({
      fullName,
      password,
      phone,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!', user: newUser });
  } catch (error) {
    console.error('Error while registering user:', error);
    res.status(500).json({ message: 'Server error while registering user.', error });
  }
};

// Get all registered users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error while fetching users:', error);
    res.status(500).json({ message: 'Server error while fetching users.', error });
  }
};
