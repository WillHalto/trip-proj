var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
require("dotenv").config();

//main app
var app = express();

//request parsing
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//init default database connection
mongoose.connect(
  process.env.MONGODB_ID,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

//Routes
var router = require("./src/routes/index");
app.use("/", router);

module.exports = app;
