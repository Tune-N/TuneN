'use strict'

const api = module.exports = require('express').Router()

api
  // .get('/heartbeat', (req, res) => res.send({ok: true}))
  // .use('/auth', require('./auth'))
  .use('/users', require('./users'))

// No routes matched? 404.
api.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});
