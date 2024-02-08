const mongoose = require("mongoose");
const _ = require("lodash");

const { Schema } = mongoose;

const displayModel = new Schema({
  storeID: { type: String }, // The Store Number
  pan: { type: String }, // Pan Size (S or L)
  gName: { type: String }, //Gelato Name
  gType: {type: String }, //Gelato Type (sorbet / gelato / yoggi / diabetic / vegan)
  order: {type: String } // The order to display the Pan
});

module.exports = mongoose.model("Display", displayModel);
