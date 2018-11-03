//Routing for the api

var express = require("express");
var router = express.Router();

//controllers
var tripController = require("../controllers/trip.controller");

//routes
router.get("/getTrips", tripController.getTrips);
router.post("/addTrip", tripController.addTrip);
router.post("/addExpense", tripController.addExpense);
router.post("/deleteTrip", tripController.deleteTrip);
router.post("/addMember", tripController.addMember);

module.exports = router;
