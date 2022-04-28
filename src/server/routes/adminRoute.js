// const async = require("async");
const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const ver = require("../config/version.json");
const servAutho = require("../config/serv-auth.json");

function routes(User, Campaign) {
  const adminRouter = express.Router();

  // GETS A NEW HASH PASSWORD
  adminRouter
    .route("/admin/newhash")

    .get((req, res) => {
      const plainTextPass = req.query.pass;
      const hashText = bcrypt.hashSync(plainTextPass, 10);

      return res.json({ Pass: plainTextPass, Hash: hashText });
    });

  adminRouter
    .route("/admin/ver")

    .get((req, res) => {
      return res.json({ currVersion: ver.ver });
    });

  // UPDATES CAMPAIGN VERSIONS
  adminRouter.route("/admin/9TQ7EMebMMfntB").get((req, res) => {
    if (req.query.auth === servAutho.admin - auth) {
      const newVer = Number(req.query.ver);
      const nquery = { appVersion: ver.ver };
      const nupdate = { appVersion: newVer };
      Campaign.updateMany(nquery, nupdate, (campErr, campUpdated) => {
        if (campErr) {
          return res.send(campErr);
        }
      });

      return res.json({ OldVersion: ver.ver, NewVersion: newVer });
    }
    return res.json({ errorMessage: "Not Authorized, BITCH" });
  });

  return adminRouter;
}

module.exports = routes;
