const express = require("express");
const helpers = require("../config/helpers");
const conJson = require("../../../src/app/chore/conefetti.json");
const whisJson = require("../../../src/app/chore/whisky.json");

function routes() {
  const jsonRouter = express.Router();

  jsonRouter.route("/confjson").get((req, res) => {
    return res.json(conJson);
  });

  jsonRouter.route("/whisjson").get((req, res) => {
    return res.json(whisJson);
  });

  return jsonRouter;
}

module.exports = routes;
