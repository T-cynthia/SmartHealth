const { MongoClient } = require('mongodb');

const uri = " ";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas!");

    const db = client.db("smart_healthcare"); // your DB name
    const collection = db.collection("patients"); // your collection

    // Example: Insert a document
    const result = await collection.insertOne({ name: "Baby John", age: 2 });
    console.log("Document inserted:", result.insertedId);

  } catch (err) {
    console.error("❌ Connection error:", err);
  } finally {
    await client.close();
  }
}

run();
