let express = require("express");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let mongoose = require("mongoose");
require("dotenv").config();

//main app
let app = express();

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
let router = require("./src/routes/index");
app.use("/", router);

module.exports = app;
