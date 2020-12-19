var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var unitsRoutes = require('./routes/unitsRoutes');
var studentsRoutes = require('./routes/studentsRoutes');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/units',unitsRoutes);
app.use('/api/students',studentsRoutes);


module.exports = app;

