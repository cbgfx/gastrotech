const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();

//FOR PROD:
const MONGODB_URI =
  "mongodb+srv://conedev:X0bCs8iH8cFQ0KHT@cluster0.h4z9q.mongodb.net/inventory?retryWrites=true&w=majority";

// const dbURL = process.env.MONGODB_URI || "mongodb://localhost/npc-tracker";
const dbURL = MONGODB_URI;
const port = process.env.PORT || 3000;
const db = mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const User = require("./models/userModel");
const userRouter = require("./routes/userRoute")(User);

const Supplier = require("./models/supplierModel");
const supplierRouter = require("./routes/supplierViewRoute")(Supplier);

const mailingServicesRouter = require("./routes/mailingRoute")(User);

const jsonRouter = require("./routes/jsonRoute")();

const adminRouter = require("./routes/adminRoute")(User);

/*
// Added to fix a React Router bug, where it freaks out on startup, and instead all initial requests will now be routed to index.html
// Basically, since all routing is happening client side via React-Router, and not server side, the app gets confused
// So we have to redirect it to a dummy page aka 'index.html', so React-Router can take over and properly decide how to route
// Ideadlly, we should be fine with app.get('/*',(req,res)) to catch all the routes...Buuuuut we're not. So I listed all the possible routes below :\
if (process.env.NODE_ENV == `production`) {
  app.use(express.static(path.resolve(__dirname, "../../dist")));
  app.use(express.static(path.resolve(__dirname, "../../public")));

  var filePath = "index.html";
  var resolvedPath = path.resolve(filePath);
  console.log("\n \n \n RESOLVED PATH :~> ", resolvedPath);

  app.get("/", (req, res) => {
    res.sendFile(resolvedPath, function (err) {
      if (err) {
        res.status(500).send(err);
      }
      res.sendFile(resolvedPath);
    });
  });
*/

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

app.use("/api", userRouter);
app.use("/api", supplierRouter);
app.use("/api", mailingServicesRouter);
app.use("/api", adminRouter);
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
  // console.log("SERVER WOOOOORKINNNNG");
  // return res.sendStatus(200);
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
