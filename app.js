var express = require('express');
var app = express();

var drone = require('ar-drone')(app);
app.set('drone', drone);

module.exports = app;
