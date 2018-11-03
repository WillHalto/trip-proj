//Trip models

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

/**
 * A single trip member.
 */
let MemberSchema = new Schema({
  id: String,
  name: String
});

/**
 * A cost incurred on the trip, paid by one member and applying to some set of the total members.
 */
let ExpenseSchema = new Schema({
  id: String,
  amount: Number,
  paidBy: MemberSchema, //Member who paid the cost
  participants: [MemberSchema] //Array of members who this cost applies to
});

/**
 * The trip, includes the cost and member info.
 */
let TripSchema = new Schema({
  id: String,
  title: String,
  ownerID: String,
  owner: MemberSchema,
  members: [MemberSchema],
  expenses: [ExpenseSchema]
});

module.exports.Trip = mongoose.model("TripModel", TripSchema);
module.exports.Member = mongoose.model("MemberModel", MemberSchema);
module.exports.Expense = mongoose.model("ExpenseModel", ExpenseSchema);
