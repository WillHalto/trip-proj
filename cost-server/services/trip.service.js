//Database service for trips
require('dotenv').config();
var mongoose = require('mongoose');
var Trip = require('../models/trip.model');

var addTrip=function(newTrip){
    mongoose.connect(process.env.MONGODB_ID);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {

        console.log("connected");

        newTrip.save(function (err) {
            if (err) return console.error(err);
        });
     });
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

module.exports.getTrips=getTrips;
module.exports.addTrip=addTrip;