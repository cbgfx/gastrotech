const express = require("express");
const fs = require('fs');

const conJson = require("../../../src/app/chore/conefetti.json");
const whisJson = require("../../../src/app/chore/whisky.json");
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
      console.log("writing cunts")
      let book = {
        title: "1984",
        author: "George Orwell",
        read: true
      };

      let data = fs.readFileSync('confStock.json');
      let stockList = JSON.parse(data);

      stockList.push(book);

      fs.writeFile('confStock.json', JSON.stringify(stockList), function(err) {
        if (err) {
          console.log(err);
        }
      });

    } else {
      console.log("Not authenticated, slut whore bitch cunt")
    }
    return res.status(201)
  })

  return jsonRouter;
}

module.exports = routes;
