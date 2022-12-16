const nodemailer = require("nodemailer");
const express = require("express");
const helpers = require("../config/helpers");

function routes() {
  const mailingServicesRoute = express.Router();

  mailingServicesRoute.route("/forgot-password").post(async (req, res) => {
    var receiverInfo = {};

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
  return mailingServicesRoute;
}

module.exports = routes;
