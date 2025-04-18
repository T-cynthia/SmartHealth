const mongoose = require('mongoose');

// Schema defines the structure of the document in MongoDB
const Parent = new mongoose.Schema({
  fullName: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number }, // optional
});

module.exports = mongoose.model('Parent', Parent);
