//Trip model - holds a group of costs

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var TripSchema = new Schema({
   name: String, 

});

module.exports = mongoose.model('TripModel', TripSchema );