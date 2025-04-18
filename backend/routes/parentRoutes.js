const express = require('express');
const router = express.Router();
const parentController = require('../controllers/parentController'); 

// GET /api/parents
router.get('/', parentController.getAllParents);

// POST /api/parents
router.post('/register', parentController.registerParent);


module.exports = router;
