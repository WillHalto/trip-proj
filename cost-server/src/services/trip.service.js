//Database service for trips
require("dotenv").config();

let Models = require("../models/trip.model");

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
  let trips = Models.Trip.find({ ownerID: ownerID }).exec();
  return trips;
}

async function addExpense(trip, expense) {
  try {
    Models.Trip.updateOne(
      { id: trip.id },
      { $push: { expenses: expense } }
    ).exec();
  } catch (err) {
    return console.error(err);
  }
  return true;
}

async function deleteExpense(trip, expense) {
  try {
    Models.Trip.updateOne(
      { id: trip.id },
      { $pull: { expenses: expense } }
    ).exec();
  } catch (err) {
    return console.error(err);
  }
  return true;
}

async function deleteTrip(trip) {
  try {
    Models.Trip.deleteOne({ id: trip.id }).exec();
  } catch (err) {
    return console.error(err);
  }
  return true;
}

async function addMember(trip, newMember) {
  try {
    Models.Trip.updateOne(
      { id: trip.id },
      { $push: { members: newMember } }
    ).exec();
  } catch (err) {
    return console.error(err);
  }
  return true;
}

async function deleteMember(trip, member) {
  try {
    Models.Trip.updateOne(
      { id: trip.id },
      { $pull: { members: member } }
    ).exec();
  } catch (err) {
    return console.error(err);
  }
  return true;
}

module.exports.getTrips = getTrips;
module.exports.addTrip = addTrip;
module.exports.addExpense = addExpense;
module.exports.deleteExpense = deleteExpense;
module.exports.deleteTrip = deleteTrip;
module.exports.addMember = addMember;
module.exports.deleteMember = deleteMember;
