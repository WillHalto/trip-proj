//Trip controller

var Trip = require('../models/trip.model');
var TripService = require('../services/trip.service');


var getTrips=async function(req,res){
    let names ="";
  //  TripService.buildTestTrip(new Trip({ name: 'First test trip' }));

    let trips = await TripService.getTrips();
    
    //trips.forEach(trip => names += " "+trip.name);
    res.send(trips);
    
};

var getTrip=async function(req,res){
    console.log("get a trip");
    res.send("get a trip");
};

var addTrip=async function(req,res){
    console.log("add a trip");
    res.send("add a trip");
};



module.exports.getTrips=getTrips;
module.exports.getTrip=getTrip;
module.exports.addTrip=addTrip;