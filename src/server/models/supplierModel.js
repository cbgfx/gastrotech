const mongoose = require("mongoose");
const _ = require("lodash");

const { Schema } = mongoose;

const supplierModel = new Schema({
  name: { type: String },
  contact: { type: String },
  phone: { type: String },
  email: { type: String},
});

supplierModel.methods.editSanitize = function () {
  return _.pick(this, ["_id", "name", "contact", "phone", "email"]);
};

module.exports = mongoose.model("Supplier", supplierModel);
