const mongoose = require('mongoose');

// User Schema defines the structure of the document in MongoDB
const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number }, // optional
});

module.exports = mongoose.model('User', UserSchema);
