//Trip controller

var Trip = require('../models/trip.model');
var TripService = require('../services/trip.service');


var trip_get=async function(req,res){
    let names ="";
  //  TripService.buildTestTrip(new Trip({ name: 'First test trip' }));

    let trips = await TripService.getTestTrips();
    
    //trips.forEach(trip => names += " "+trip.name);
    res.send(trips);
    
};

var trip_add=async function(req,res){
    console.log("add a trip");
    res.send("add a trip");
};



module.exports.trip_get=trip_get;
module.exports.trip_add=trip_add;