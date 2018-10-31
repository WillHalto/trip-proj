var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

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

//Routes
var router = require("./src/routes/index");
app.use("/", router);

module.exports = app;
