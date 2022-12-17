const mongoose = require("mongoose");
const _ = require("lodash");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const userModel = new Schema({
  username: { type: String, lowercase: true },
  name: { type: String },
  email: { type: String, lowercase: true },
  password: { type: String },
});

// when object is found, return only the specified fields
userModel.methods.sanitize = function () {
  return _.pick(this, ["_id", "username", "name"]);
};

userModel.methods.tokenSanitize = function () {
  return _.pick(this, ["_id", "username", "name"]);
};

// userModel.methods.spectatorSanitize = function () {
//   return _.pick(this, ["_id", "username", "avatar", "name"]);
// };

// generic encryption method
userModel.methods.encrypt = function (clearText, cb) {
  bcrypt.hash(clearText, 10, function (err, hash) {
    cb(err, hash);
  });
};

// compare plain text password with hashed
userModel.methods.comparePassword = function (plaintext, cb) {
  return cb(bcrypt.compareSync(plaintext, this.password));
};

// this is called before the object is saved to DB
userModel.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userModel);
