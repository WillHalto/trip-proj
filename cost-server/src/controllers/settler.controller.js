//controller for settling shared expenses

let Models = require("../models/trip.model");
let TripService = require("../services/trip.service");

const owes = {};
function settleTrip(trip) {
  trip.members.forEach(member => {
    owes[member.name] = 0;
  });
  console.log(owes);
  return owes;
}

module.exports.settleTrip = settleTrip;
