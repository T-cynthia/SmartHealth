const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
  motherName: String,
  motherEmail: { type: String, required: true, unique: true },
  motherPhone: String,
  fatherName: String,
  fatherEmail: String,
  fatherPhone: String,
  childName: String,
  dob: Date,
  gender: String,
  weight: String,
  height: String,
  bloodType: String,
  deliveryMethod: String,
  doctor: String,
  password: String,
  verified: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Family', familySchema);
