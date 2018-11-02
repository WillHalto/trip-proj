//Trip models

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CostSchema = new Schema({
  id: String,
  amount: Number,
  paidBy: String, //ID of member who paid the cost
  participants: [String] //ID array of members who this cost applies to
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
