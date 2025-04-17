const mongoose = require('mongoose');

const newbornSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  parent: String,
});

module.exports = mongoose.model('Newborn', newbornSchema);
