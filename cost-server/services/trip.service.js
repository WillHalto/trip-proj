//Database service for trips
require('dotenv').config();
var mongoose = require('mongoose');
var Trip = require('../models/trip.model');

var buildTestTrip=function(testTrip){
    mongoose.connect(process.env.MONGODB_ID);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {

        console.log("connected");

        testTrip.save(function (err) {
            if (err) return console.error(err);
        });
     });
};


var getTrip=function(id){
    mongoose.connect(process.env.MONGODB_ID);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("connected");
     });
     return Trip.find().exec();
};


var getTrips=function(){
    mongoose.connect(process.env.MONGODB_ID);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {

        console.log("connected");
     });
     return Trip.find().exec();
};


module.exports.getTrip=getTrip;
module.exports.getTrips=getTrips;
module.exports.buildTestTrip=buildTestTrip;