
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");

//internal jwt authentication
var authService = require('./auth.js');

//routers
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api.routes');

//main app
var app = express();

//cookie parser
app.use(cookieParser())

//body parser
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({   // to support URL-encoded bodies
    extended: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//Routes
app.use('/', authService);
app.use('/api', apiRouter);



module.exports = app;
