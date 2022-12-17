const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const config = require("../config"); // the index.js file inside the dir will be automatically added

module.exports = {
  // Check that the Authorization header exists
  // Exctract token, and decode it

  extractHeaderAndUser: (req, cb) => {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return cb({ errorMessage: `Unauthenticated request` });
    }

    const decoded = jwt.verify(
      authHeader,
      config.jwt.secret,
      function (err, decoded) {
        if (err) {
          console.log("Unauthorized Request", err);
          return cb({ errorMessage: `Unauthenticated request` });
        }
        // console.log("Decoded....", decoded);
        User.findOne({ _id: decoded.id }, function (err, dbUser) {
          if (err || !dbUser) {
            console.log("no user found");
            return cb({ errorMessage: `User not found` });
          }
          return cb(null, dbUser); // success
        });
      }
    );
  },

  // Check that the decoded/passed user exists (not necessarily Admin)
  isAuthenticated: (req, res, next) => {
    module.exports.extractHeaderAndUser(req, function (err, user) {
      if (err) {
        console.log("isAuth 401", err);
        return res
          .status(401)
          .send({ errorMessage: `Unauthenticated request` });
      }
      return next();
    });
  },
};
