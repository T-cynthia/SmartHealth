const express = require('express');
const router = express.Router();
const Newborn = require('../models/Newborn');

// GET all registered parents from newborn collection
router.get('/', async (req, res) => {
  try {
    const newborns = await Newborn.find({}, 'motherName motherPhone fatherName fatherPhone createdAt');

    const parents = [];

    newborns.forEach(baby => {
      if (baby.motherName && baby.motherPhone) {
        parents.push({
          fullName: baby.motherName,
          phone: baby.motherPhone,
          createdAt: baby.createdAt,
        });
      }
      if (baby.fatherName && baby.fatherPhone) {
        parents.push({
          fullName: baby.fatherName,
          phone: baby.fatherPhone,
          createdAt: baby.createdAt,
        });
      }
    });

    // Remove duplicates (same name and phone)
    const uniqueParents = Array.from(
      new Map(parents.map(p => [`${p.fullName}-${p.phone}`, p])).values()
    );

    res.json(uniqueParents);
  } catch (err) {
    console.error('Error fetching parents:', err);
    res.status(500).json({ error: 'Failed to fetch parent data' });
  }
});

module.exports = router;
