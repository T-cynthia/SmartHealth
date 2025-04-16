// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}

module.exports = connectToMongo;
