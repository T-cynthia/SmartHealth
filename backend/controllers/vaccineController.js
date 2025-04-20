const Newborn = require('../models/Newborn');

// Default vaccine list
const defaultVaccines = [
  { name: 'BCG', dueDate: new Date('2025-04-20') },
  { name: 'Polio', dueDate: new Date('2025-04-28') },
  { name: 'Hepatitis B', dueDate: new Date('2025-05-02') },
  { name: 'Measles', dueDate: new Date('2025-06-10') }
];

// Seed vaccines to all newborns
const seedVaccines = async (req, res) => {
  try {
    const babies = await Newborn.find();

    for (const baby of babies) {
      const updatedVaccines = defaultVaccines.map(v => ({
        name: v.name,
        dueDate: v.dueDate,
        status: new Date(v.dueDate) < new Date() ? 'Completed' : 'Upcoming'
      }));

      baby.vaccines = updatedVaccines;
      await baby.save();
    }

    res.json({ message: 'Vaccines successfully seeded to all newborns.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to seed vaccines.' });
  }
};

// Get all babies with their vaccination data
const getBabiesWithVaccines = async (req, res) => {
  try {
    const babies = await Newborn.find({}, 'childName vaccines'); // Only return childName and vaccines

    res.json(babies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch babies and vaccines.' });
  }
};

module.exports = {
  seedVaccines,
  getBabiesWithVaccines
};
