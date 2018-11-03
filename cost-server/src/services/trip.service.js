//Database service for trips
require("dotenv").config();

var Models = require("../models/trip.model");

/**
 * Saves a new trip to the database.
 * @param newTrip The Trip model to save to the database.
 */
async function addTrip(newTrip) {
  newTrip.save(function(err) {
    if (err) return console.error(err);
  });
  return true;
}

/**
 * Retrieves all trips from the database for the given owner
 * @param ownerID The id of the trip's owner
 */
async function getTrips(ownerID) {
  let query = Models.Trip.find({ ownerID: ownerID });
  return query.exec();
}

async function addExpense(trip, expense) {
  let updateTrip = Models.Trip.find(trip).exec();
  updateTrip.expenses.push(expense);
  updateTrip.save(function(err) {
    if (err) return console.error(err);
  });

  return true;
}

async function deleteTrip(trip) {
  try {
    Models.Trip.deleteOne(trip).exec();
  } catch (err) {
    return console.error(err);
  }
  return true;
}

module.exports.getTrips = getTrips;
module.exports.addTrip = addTrip;
module.exports.addExpense = addExpense;
module.exports.deleteTrip = deleteTrip;
