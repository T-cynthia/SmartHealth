// models/Parent.js

const mongoose = require('mongoose');

// Schema defines the structure of the document in MongoDB
const ParentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String }, // optional
  baby: {
    fullName: String,
    dateOfBirth: Date,
    gender: String,
    birthHospital: String,
    healthId: String
  },
  verified: {
  type: Boolean,
  default: false
}
});

// Export the model to use in other files
module.exports = mongoose.model('Parent', ParentSchema);


