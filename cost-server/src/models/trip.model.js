//Trip models

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CostSchema = new Schema({
  id: String,
  amount: Number
});

var MemberSchema = new Schema({
  id: String,
  name: String
});

var TripSchema = new Schema({
  id: String,
  title: String,
  members: [MemberSchema],
  costCollection: [CostSchema]
});

module.exports = mongoose.model("TripModel", TripSchema);
