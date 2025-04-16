// index.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function connectToMongo() {
  if (!client.topology?.isConnected()) {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas!");
  }
}

module.exports = {
  connectToMongo,
  client
};
