//Trip controller

var Trip = require("../models/trip.model");
var TripService = require("../services/trip.service");

var getTrips = async function(req, res) {
  let trips = await TripService.getTrips();
  res.send(trips);
};

var addTrip = async function(req, res) {
  let trip = new Trip(req.body);
  let id = await TripService.addTrip(trip);
  res.status(200).send(id);
};

module.exports.getTrips = getTrips;
module.exports.addTrip = addTrip;
