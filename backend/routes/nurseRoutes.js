import express from 'express';
import Nurse from '../models/Nurse.js';

const router = express.Router();

// Add new nurse
router.post('/', async (req, res) => {
  try {
    const nurse = new Nurse(req.body);
    await nurse.save();
    res.status(201).json(nurse);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add nurse' });
  }
});

// Get all nurses
router.get('/', async (req, res) => {
  try {
    const nurses = await Nurse.find();
    res.json(nurses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch nurses' });
  }
});

export default router;
