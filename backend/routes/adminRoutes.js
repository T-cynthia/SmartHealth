import express from 'express';
import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Login Admin
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(401).json({ message: 'Invalid email' });

  const isMatch = await admin.matchPassword(password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

  const token = jwt.sign({ id: admin._id }, 'supersecret', { expiresIn: '1d' });

  res.json({ token, admin: { id: admin._id, email: admin.email } });
});

export default router;
