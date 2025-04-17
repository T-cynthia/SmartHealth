import mongoose from 'mongoose';

const nurseSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Nurse', nurseSchema);
