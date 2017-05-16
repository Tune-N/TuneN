'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;

const crypto = require('crypto');
const _ = require('lodash');
const Sequelize = require('sequelize');

module.exports = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
  },
  salt: {
    type: Sequelize.STRING,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  isLive: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  googleId: {
    type: Sequelize.STRING,
  },
}, {
  instanceMethods: {
    sanitize: function () {
      return _.omit(this.toJSON(), ['password', 'salt']);
    },
    correctPassword: function (candidatePassword) {
      return this.Model.encryptPassword(candidatePassword, this.salt) === this.password;
    }
  },
  classMethods: {
    generateSalt: function () {
      return crypto.randomBytes(16).toString('base64');
    },
    encryptPassword: function (plainText, salt) {
      const hash = crypto.createHash('sha1');
      hash.update(plainText);
      hash.update(salt);
      return hash.digest('hex');
    }
  },
  hooks: {
    beforeCreate: setSaltAndPassword,
    beforeUpdate: setSaltAndPassword
  }
});

function setSaltAndPassword (user) {
  if (user.changed('password')) {
    user.salt = user.Model.generateSalt();
    user.password = user.Model.encryptPassword(user.password, user.salt);
  }
}
