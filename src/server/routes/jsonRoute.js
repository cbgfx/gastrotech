const express = require("express");

const conJson = require("../chore/conefetti.json");
const whisJson = require("../chore/whisky.json");
//con stuff
const authent = "7guzJtWeNRmx";

function routes() {
  const jsonRouter = express.Router();

  jsonRouter.route("/confjson").get((req, res) => {
    console.log("I received this");
    if (req.query.auth == authent) {
    return res.json(conJson);
    } else {
      console.log("errorrrrr bitches");
    }
  });

  jsonRouter.route("/whisjson").get((req, res) => {
    return res.json(whisJson);
  });

  return jsonRouter;
}

module.exports = routes;
