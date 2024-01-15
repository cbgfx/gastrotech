const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

var port = process.env.PORT || 3000;



const uri = "mongodb+srv://conedev:fQc2jLJkUc5fcTG@cluster0.h4z9q.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


const jsonRouter = require("./routes/jsonRoute")();


// Avoid using CORS in production for security
if (process.env.NODE_ENV != `production`) {
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );

  // Fix cors issue in dev
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // use port
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // don't support parsing of application/x-www-form-urlencoded post data

app.use("/api", jsonRouter);

// app.get("/", (req, res) => {
//   res.send("Something went wrong, please contact dev@npc-tracker.com");
// });

//if (process.env.NODE_ENV == `production`) {
// app.use(express.static(path.resolve(__dirname, "../../dist")));
app.use(express.static(path.resolve(__dirname, "../../build")));

var filePath = "build/index.html";
var resolvedPath = path.resolve(filePath);
console.log("\n Resolved Path: ", resolvedPath);

app.get("*", (req, res) => {
  return res.sendFile(resolvedPath, function (err) {
    if (err) {
      console.log("\n \n \n Error resolving PATH : ", err);
      res.status(500).send(err);
    }
    return res.sendFile(resolvedPath);
  });
});
//}

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
