const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
  from: { type: String, default: 'Admin' }, // Always from admin
});

module.exports = mongoose.model('Notification', notificationSchema);
