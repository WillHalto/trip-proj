//Trip controller

var Trip = require('../models/trip.model');
var TripService = require('../services/trip.service');


var trip_get=function(req,res){
    var names ="";
    TripService.buildTestTrip(new Trip({ name: 'First test trip' }));

    var tripsPromise = TripService.getTestTrips();
    tripsPromise.then(function (trips) {
        trips.forEach(trip => names += " "+trip.name);
        res.send(names);
    });
    
};



module.exports.trip_get=trip_get;