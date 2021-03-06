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
var cors = require('cors')

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(favicon(__dirname + 'client/build/favicon.ico'));

app.use('/api', apiRouter);
app.use('/users', usersRouter);
// app.all('*', indexRouter);
app.all('*', function(req, res, next) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

module.exports = app;
