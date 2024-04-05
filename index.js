const express = require("express");
const cors = require("cors");
const database = require("./modules/database");
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://mh:qpXTHBj4hticZpz8@fabitems.t6mvccs.mongodb.net/?retryWrites=true&w=majority&appName=FabItems";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const app = express();

app.use(cors());

app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src *; style-src *  'unsafe-inline'; script-src * 'self' 'unsafe-inline' 'unsafe-eval'"
  );
  next();
});

app.use(express.static(__dirname));

const server = app.listen(5500, () => {
  console.log(`The application started on port ${server.address().port}`);
});

async function main() {
  try {
    await client.connect();

    const db = client.db("membership");
    const coll = db.collection("membership");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
