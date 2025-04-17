const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');  // Update to use userController

// POST route for registering a user
router.post('/register', userController.registerUser);

// GET route for fetching all users
router.get('/', userController.getUsers);

module.exports = router;
