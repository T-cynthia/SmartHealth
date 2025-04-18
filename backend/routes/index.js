const express = require('express');
const router = express.Router();
const nurseRoutes = require('./nurseRoutes')
// const userRoutes = require('./userRoutes');

// router.use('/users', userRoutes);
router.use('/nurse', nurseRoutes);

module.exports = router;
