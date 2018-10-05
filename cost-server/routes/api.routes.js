//whaltom
//Routing for the api


var express = require('express');
var router = express.Router();

//controllers
var costGroupController = require('../controllers/cost_group.controller');

//routes
router.get('/trips',costGroupController.trip_get);
router.post('/newtrip',costGroupController.trip_add);


module.exports=router;