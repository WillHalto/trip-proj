//Trip controller

var Model = require("../models/trip.model");
var TripService = require("../services/trip.service");

/**
 * Retrieves all stored trips for the given user.
 * @param res The response to send to the client containing all trips.
 */
var getTrips = async function(req, res) {
  let trips = await TripService.getTrips();
  res.send(trips);
};

var DDDgetTrips = async function(req, res) {
  let ownerID = req.body.id;
  let trips = await TripService.getTrips(id);
  res.send(trips);
};

/**
 * Adds a trip for the given user
 */
var addTrip = async function(req, res) {
  let trip = new Model.Trip(req.body);
  let id = await TripService.addTrip(trip);
  res.status(200).send(id);
};

var addCost = async function(req, res) {};

var calcTotals = async function(req, res) {};

module.exports.getTrips = getTrips;
module.exports.addTrip = addTrip;
