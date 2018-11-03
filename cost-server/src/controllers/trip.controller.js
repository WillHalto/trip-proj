//Trip controller

var Models = require("../models/trip.model");
var TripService = require("../services/trip.service");

/**
 * Retrieves all stored trips for the given user.
 * @param res The response to send to the client containing all trips.
 */
async function getTrips(req, res) {
  let ownerID = req.googlePayload["sub"];
  let trips = await TripService.getTrips(ownerID);
  res.send(trips);
}

/**
 * Adds a trip for the given user
 */
async function addTrip(req, res) {
  let trip = new Models.Trip(req.body);
  let ownerModel = new Models.Member({
    id: req.googlePayload["sub"],
    name: req.googlePayload["name"]
  });
  trip.owner = ownerModel;
  trip.ownerID = ownerModel.id;

  let success = await TripService.addTrip(trip);
  if (success) {
    res.status(200).send(trip);
  } else {
    res.status(418).send();
  }
}

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
