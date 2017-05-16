'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('Song')
// to get access to the Song model.

const User = require('./user');
const RequestedSong = require('./requestedSong');


// Form the associations

RequestedSong.belongsTo(User);

// Don't really hav a reason to relate to all instances. We will see
User.hasMany(RequestedSong);

module.exports = {
  User,
  RequestedSong,
};
