const express = require('express');
const router = express.Router();
const newbornController = require('../controllers/newbornController');

router.post('/register', newbornController.registerNewborn);
router.get('/', newbornController.getAllNewborns);

module.exports = router;
