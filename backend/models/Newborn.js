const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({
  name: String,
  dueDate: Date,
  status: {
    type: String,
    enum: ['Completed', 'Upcoming'],
    default: 'Upcoming'
  }
});

const newbornSchema = new mongoose.Schema({
  childName: String,
  dob: Date,
  gender: String,
  weight: String,
  height: String,
  bloodType: String,
  deliveryMethod: String,
  doctor: String,
  placeOfBirth: {
    district: String,
    sector: String,
    cell: String
  },

  motherName: String,
  motherPhone: String,
  fatherName: String,
  fatherPhone: String,

  vaccines: [vaccineSchema]
}, { timestamps: true });

module.exports = mongoose.model('Newborn', newbornSchema);
