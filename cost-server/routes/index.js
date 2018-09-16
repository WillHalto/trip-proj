var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/api');
});

// router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });

//   mongoose.connect('mongodb://yko0630:f0malhaut@ds249530.mlab.com:49530/trip_data');

//   var db = mongoose.connection;
//   db.on('error', console.error.bind(console, 'connection error:'));
//   db.once('open', function () {


//     console.log("connected");

//     var Trip = require('../models/trip.model');

//     var testTrip = new Trip({ name: 'First test trip' });

//     testTrip.save(function (err) {
//       if (err) return console.error(err);
//     });

//     var tripNames;

//     Trip.find(function (err, trips) {
//       if (err) return console.error(err);
//       trips.forEach(trip => tripNames = trip.name);
//       console.log(tripNames);
//         res.render('index', { title: tripNames });
//       })
    


//   });
//  });

module.exports = router;
