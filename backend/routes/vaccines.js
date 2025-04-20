const express = require('express');
const router = express.Router();
const { seedVaccines, getBabiesWithVaccines } = require('../controllers/vaccineController');

// Seed default vaccines to all newborns
router.get('/seed', seedVaccines);

// Get all babies with vaccines
router.get('/all', getBabiesWithVaccines);

module.exports = router;
