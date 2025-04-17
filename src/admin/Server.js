const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/smarthealth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const NewbornSchema = new mongoose.Schema({
  name: String,
  dob: String,
  parent: String
});

const Newborn = mongoose.model('Newborn', NewbornSchema);

app.get('/api/newborns', async (req, res) => {
  const newborns = await Newborn.find();
  res.json(newborns);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
