//Routing for the api

let express = require("express");
let router = express.Router();

//controllers
let tripController = require("../controllers/trip.controller");

//routes
router.get("/getTrips", tripController.getTrips);
router.post("/addTrip", tripController.addTrip);
router.post("/addExpense", tripController.addExpense);
router.post("/deleteTrip", tripController.deleteTrip);
router.post("/addMember", tripController.addMember);

module.exports = router;
