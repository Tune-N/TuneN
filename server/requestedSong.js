'use strict'

const db = require('../db/db')

const RequestedSong = db.model('requestedSong');


module.exports = require('express').Router()
  .post('/:id', (req, res, next) => {
    console.log('req.body here', req.body);
    req.body.userId = req.params.id;
    RequestedSong.create(req.body)
      .then(songs => res.status(201).json(songs))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    RequestedSong.findAll({
      where: {
        userId: req.params.id,
        live: true,
      },
    })
      .then(songs => {
        songs ? res.json(songs) : res.sendStatus(404);
      })
      .catch(next);
  })
  // removes all songs once the session is over. Can later implement one to save the playlist by making live false
  .delete('/:id', (req, res, next) => {
    RequestedSong.destroy({
      where: {
        userId: req.params.id,
        live: true,
      }
    })
    .then(destroyed => {
      res.send('dj session ended and songs removed')
    })
    .catch(next);
  });

// Will create a new requestedSongs list when the DJ goes live. The songs will be sent over in an array with JSON object inside, sorted.
// They will be sorted on the front end before adding to the state. This way the state always has the sorted songs, which can be dispatched and also sent to the database.
//

// DJ goes live and allows people to search songs. once it's added all the info will be grabbed and added to the list
