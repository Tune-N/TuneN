const path = require('path');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const socketio = require('socket.io')

const startDb = require('../db');

const app = express();
app.set('port', (process.env.PORT || 3000));

const server = app.listen(app.get('port'), function () {
  console.log('Node app is running on port:', app.get('port'));
  //Promise
  startDb
});

const websocket = socketio(server);

//TODO after everything else redux-socket io middleware
websocket.on('connection', function(socket) {
  console.log('A new client has connected', socket.id)

  socket.on('newViewer', function (data) {
    socket.broadcast.emit('newViewer', data)
  })

  socket.on('songChange', function (attributes) {
    socket.broadcast.emit('songChange', attributes)
  })

  socket.on('setDeckSong', function (deckSong) {
    socket.broadcast.emit('setDeckSong', deckSong)
  })

  socket.on('removeSong', function (songName) {
    socket.broadcast.emit('removeSong', songName)
  })

  socket.on('loadAllSongs', function(data){
    console.log('broadcasting from server')
    socket.broadcast.emit('loadAllSongs', data);
  })
})

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  require('../.localSecrets'); // this will mutate the process.env object with your secrets.
}


app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'));


app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


/* eslint no-unused-vars: "off" */
// Requires 4 parameters in order to be treated as a error handler

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
