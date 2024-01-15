const express = require("express");
const fs = require('fs');

const conJson = require("../../../src/app/chore/conefetti.json");
const whisJson = require("../../../src/app/chore/whisky.json");
const { MongoClient } = require("mongodb");
//con stuff
const authent = "7guzJtWeNRmx";

function routes() {
  const jsonRouter = express.Router();

  jsonRouter.route("/confjson").get((req, res) => {
    if (req.query.auth == authent) {
    return res.json(conJson);
    } else {
      console.log("errorrrrr bitches");
    }
  });

  jsonRouter.route("/whisjson").get((req, res) => {
    return res.json(whisJson);
  });

  jsonRouter.route("/writeStock").post((req, res) => {
  
    if (req.query.auth == authent) {
      const newStockAddition = {
        storeID: req.body.storeID,
        pan: req.body.pan,
        gName: req.body.gName,
        gType: req.body.gType,
        order: req.body.order
      }

    } else {
      console.log("Not authenticated, slut whore bitch cunt")
    }
    return res.status(201)
  })

  return jsonRouter;
}

module.exports = routes;
