//Database service for trips

var mongoose = require('mongoose');
var Trip = require('../models/trip.model');

var buildTestTrip=function(testTrip){

    mongoose.connect('mongodb://yko0630:f0malhaut@ds249530.mlab.com:49530/trip_data');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {

        console.log("connected");

        testTrip.save(function (err) {
            if (err) return console.error(err);
        });
     });
};


var getTestTrips=function(){

    mongoose.connect('mongodb://yko0630:f0malhaut@ds249530.mlab.com:49530/trip_data');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {

        console.log("connected");

     });

     
     return Trip.find().exec();
};


module.exports.getTestTrips=getTestTrips;
module.exports.buildTestTrip=buildTestTrip;