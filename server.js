"use strict";

var express = require('express');
var open = require('open');

var app = express();
const PORT = process.env.PORT || 9000;

app.use("/", express.static("./dist"));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
  console.log('Launching browser...');
  open('http://localhost:' + PORT);
});
