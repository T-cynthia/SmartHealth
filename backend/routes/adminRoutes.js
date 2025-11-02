const express = require('express');
const adminController = require('../controllers/adminController.js');

const router = express.Router();

router.post('/register', adminController.registerAdmin);
router.post('/login', adminController.loginAdmin);
router.post('/send-notification', adminController.sendNotification);
router.get('/notifications', adminController.getNotifications);

module.exports = router;
