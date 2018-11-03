//Trip controller

var Models = require("../models/trip.model");
var TripService = require("../services/trip.service");

/**
 * Retrieves all stored trips for the given user.
 * @param res The response to send to the client containing all trips.
 */
var getTrips = async function(req, res) {
  let ownerID = req.sub;
  let trips = await TripService.getTrips(ownerID);
  res.send(trips);
};

/**
 * Adds a trip for the given user
 */
var addTrip = async function(req, res) {
  let trip = new Model.Trip(req.body);
  trip.owner = req.sub;
  let id = await TripService.addTrip(trip);
  res.status(200).send({ id });
};

var addCost = async function(req, res) {
  let trip = new Models.Trip(req.body.trip);
  trip.owner = req.sub;
  let cost = new Models.Cost(req.body.cost);
  let success = await TripService.addCost(trip, cost);
  if (success) {
    res.status(200).send();
  } else {
    res.status(418).send();
  }
};

module.exports.getTrips = getTrips;
module.exports.addTrip = addTrip;
