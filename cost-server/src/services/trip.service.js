//Database service for trips
require("dotenv").config();
var mongoose = require("mongoose");
var Models = require("../models/trip.model");

/**
 * Saves a new trip to the database.
 * @param newTrip The Trip model to save to the database.
 */
var addTrip = async function(newTrip) {
  mongoose.connect(
    process.env.MONGODB_ID,
    { useNewUrlParser: true }
  );
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("Add Trip");
    newTrip.save(function(err) {
      if (err) return console.error(err);
    });
  });
  return newTrip.id;
};

/**
 * Retrieves all trips from the database
 */
var getTrips = async function() {
  mongoose.connect(process.env.MONGODB_ID);
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("Get Trips");
  });
  return Models.Trip.find().exec();
};

var DDDgetTrips = async function(ownerID) {
  mongoose.connect(process.env.MONGODB_ID);
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("Get Trips");
  });
  var query = Models.Trip.find({ owner: member });
  return Models.Trip.find().exec();
};

var getmember = async function(memberID) {
  mongoose.connect(process.env.MONGODB_ID);
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("Get Trips");
  });
  var query = Models.Member.find({ id: memberID });
  return query.exec();
};

module.exports.getTrips = getTrips;
module.exports.addTrip = addTrip;
