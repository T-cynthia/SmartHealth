const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Patient = require('./models/Patient');

const generateToken = (patient) => {
  return jwt.sign({ id: patient._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Login Route (Authentication)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await Patient.findOne({ email });
    if (!patient) return res.status(400).json({ message: 'Patient not found' });

    // Check password (you should hash the password on the patient creation side)
    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate JWT token
    const token = generateToken(patient);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
