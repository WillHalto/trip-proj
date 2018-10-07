//whaltom
//Routing for the api


var express = require('express');
var router = express.Router();

//controllers
var costGroupController = require('../controllers/cost_group.controller');

//routes
router.get('/trip/:id',costGroupController.getTrip);
router.get('/trips',costGroupController.getTrips);
router.post('/newtrip',costGroupController.addTrip);


module.exports=router;