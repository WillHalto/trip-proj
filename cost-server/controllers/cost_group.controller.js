//Trip controller

var Trip = require("../models/trip.model");
var TripService = require("../services/trip.service");

var getTrips = async function(req, res) {
  let trips = await TripService.getTrips();
  res.send(trips);
};

var TEST = async function(req, res) {
  res.send("TEST");
};

var addTrip = async function(req, res) {
  console.log("add a trip");
  let trip = new Trip(req.body);
  console.log(trip.title);
  let id = await TripService.addTrip(trip);
  res.status(200).send();
};

module.exports.getTrips = getTrips;
module.exports.addTrip = addTrip;
module.exports.TEST = TEST;
