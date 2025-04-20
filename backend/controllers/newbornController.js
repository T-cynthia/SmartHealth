const Newborn = require('../models/Newborn');

// Register a newborn
const registerNewborn = async (req, res) => {
  try {
    const data = req.body;
    const newborn = new Newborn(data);
    await newborn.save();
    res.status(201).json({ message: 'Newborn registered successfully', newborn });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Failed to register newborn', error });
  }
};

// Get all newborns
const getAllNewborns = async (req, res) => {
  try {
    const newborns = await Newborn.find().sort({ createdAt: -1 });
    res.status(200).json(newborns);
  } catch (error) {
    console.error('Fetch Error:', error);
    res.status(500).json({ message: 'Failed to fetch newborns', error });
  }
};

const getTodayNewborns = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // midnight today

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); // midnight tomorrow

    const todayNewborns = await Newborn.find({
      createdAt: {
        $gte: today,
        $lt: tomorrow
      }
    });

    res.status(200).json(todayNewborns);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching today\'s newborns', error: err });
  }
};

const getNewbornByParent = async (req, res) => {
  const { name, phone } = req.body;

  try {
    const babies = await Newborn.find({
      $or: [
        { motherName: name, motherPhone: phone },
        { fatherName: name, fatherPhone: phone }
      ]
    });

    if (!babies.length) {
      return res.status(404).json({ message: 'No baby found for this parent' });
    }

    res.json(babies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve baby data' });
  }
};


module.exports = {
  registerNewborn,
  getAllNewborns,
  getTodayNewborns,
  getNewbornByParent
};
