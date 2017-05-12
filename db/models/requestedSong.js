'use strict';

const db = require('../db');

const Sequelize = require('sequelize');

module.exports = db.define('requestedSong', {
  songname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  artist: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
  votes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  live: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
}, {

});
