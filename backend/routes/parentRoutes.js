const express = require('express');
const router = express.Router();
const { parentLogin } = require('../controllers/parentController');

router.post('/login', parentLogin);

module.exports = router;
