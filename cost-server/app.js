
var express = require('express');
var path = require('path');


var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api.routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use('/', indexRouter);
app.use('/api', apiRouter);



module.exports = app;
