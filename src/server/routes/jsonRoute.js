const express = require("express");
const helpers = require("../config/helpers");
const conJson = require("../../../src/app/chore/conefetti.json");

function routes() {
  const jsonRouter = express.Router();

  jsonRouter.route("/confjson").get((req, res) => {
    console.log("Hit!");
    return res.json(conJson);
  });
  return jsonRouter;
}

module.exports = routes;
