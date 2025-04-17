const express = require('express');
const router = express.Router();
const { getAllNewborns } = require('../controllers/newbornController');

router.get('/', getAllNewborns);

module.exports = router;
