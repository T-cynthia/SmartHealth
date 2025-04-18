const express = require('express');
const router = express.Router();
const nurseController = require('../controllers/nurseController');

router.post('/register', nurseController.register);
router.post('/login', nurseController.login);
router.get('/all', nurseController.getAllNurses);
router.put('/:id/edit', nurseController.editNurse);        // PUT  /api/nurse/:id/edit (Edit nurse)
router.delete('/:id', nurseController.deleteNurse); 

module.exports = router;
