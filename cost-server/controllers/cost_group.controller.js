//Trip controller

var Trip = require('../models/trip.model');
var TripService = require('../services/trip.service');


var getTrips=async function(req,res){
    let trips = await TripService.getTrips();
    res.send(trips);
    
};

var addTrip=async function(req,res){
    console.log("add a trip");
    res.send("add a trip");
};



module.exports.getTrips=getTrips;
module.exports.addTrip=addTrip;