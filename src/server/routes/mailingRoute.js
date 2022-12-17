const nodemailer = require("nodemailer");
const express = require("express");
const mongodb = require("mongodb");
const helpers = require("../config/helpers");

function routes(User) {
  const mailingServicesRoute = express.Router();

  mailingServicesRoute.route("/forgot-password").post(async (req, res) => {
    var receiverInfo = {};
    User.findOne({ email: req.body.email }, async (err, user) => {
      if (err || !user) {
        console.log("not found!");
        res.status(401).send({ errorMessage: `User not found.` });
        return;
      }

      // Assign a new random pass to user
      user.password = helpers.generateRandomPassword();

      user.save((err) => {
        if (err) {
          console.log("Save error");
          return res.send(err);
        }
      });

      //Information to be passed
      receiverInfo = {
        name: user.name,
        username: user.username,
        password: user.password,
        email: user.email,
      };

      //NodeMailer Config is here
      let transport = nodemailer.createTransport({
        host: "a2plcpnl0022.prod.iad2.secureserver.net",
        port: 465,
        requireTLS: true,
        secure: true,
        auth: {
          user: "noretort@npc-tracker.com",
          pass: "%N78t{pP!{HO",
        },
      });
      if (receiverInfo !== {}) {
        await helpers.sendEmails(transport, receiverInfo);

        res.status(200).send();
      }
    });
  });
  return mailingServicesRoute;
}

module.exports = routes;
