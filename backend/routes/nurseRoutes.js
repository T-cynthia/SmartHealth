const express = require('express');
const router = express.Router();
const nurseController = require('../controllers/nurseController');

router.post('/register', nurseController.register);
router.post('/login', nurseController.login);

module.exports = router;
