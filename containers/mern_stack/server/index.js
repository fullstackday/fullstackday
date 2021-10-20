const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
const mongoUrl = "mongodb://fsday-mongodb:27017";
const client = new MongoClient(mongoUrl);

async function main() {
  await client.connect().catch(e => {
    console.error("Error connecting to database");
    console.error(e);
    process.exit();
  });
  const db = client.db("fullstackday");
  const collection = db.collection("fsdaydata");

  app.get("/data", async (req, res) => {
    let data = await collection.find({}).toArray();
    res.send(data).status(200);
  });
  
  app.listen(5000, () => console.log("Server started"));
}

main();