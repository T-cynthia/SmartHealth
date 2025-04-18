const mongoose = require('mongoose');

const newbornSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  gender: String,
  parent: String,
  
});

module.exports = mongoose.model('Newborn', newbornSchema);
