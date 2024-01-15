const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

var port = process.env.PORT || 3000;

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

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
