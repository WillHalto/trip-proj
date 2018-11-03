//Trip models

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/**
 * A single trip member.
 */
var MemberSchema = new Schema({
  id: String,
  name: String
});

/**
 * A cost incurred on the trip, paid by one member and applying to some set of the total members.
 */
var CostSchema = new Schema({
  id: String,
  amount: Number,
  paidBy: MemberSchema, //Member who paid the cost
  participants: [MemberSchema] //Array of members who this cost applies to
});

/**
 * The trip, includes the cost and member info.
 */
var TripSchema = new Schema({
  id: String,
  title: String,
  owner: String,
  members: [MemberSchema],
  expenses: [CostSchema]
});

module.exports.Trip = mongoose.model("TripModel", TripSchema);
module.exports.Member = mongoose.model("MemberModel", MemberSchema);
module.exports.Cost = mongoose.model("CostModel", MemberSchema);
