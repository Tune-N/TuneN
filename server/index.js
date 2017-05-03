'use strict'

const path = require('path')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const {resolve} = require('path')
const passport = require('passport')

app.listen(3000, function () {
  console.log("Your server is listening on port 3000");
});

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

express.static(path.join(__dirname, '../public'));

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
