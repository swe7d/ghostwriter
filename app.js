//import * as jsPDF from 'jspdf'

var express = require('express');
var path = require('path');
const favicon = require('express-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api')
var bodyparser = require('body-parser')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(favicon(__dirname + 'client/build/favicon.ico'));
// app.use(bodyparser)

app.use('/api', apiRouter);
app.use('/users', usersRouter);
app.use('/', indexRouter);

/*
var doc = new jsPDF()
doc.text('Hello World!', 10, 10)
doc.save('new.pdf')
*/
module.exports = app;
