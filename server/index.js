const path = require('path');

const socketio = require('socket.io');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const startDb = require('../db');

const app = express();
app.set('port', (process.env.PORT || 3000));

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  require('../.localSecrets'); // this will mutate the process.env object with your secrets.
}


app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'));

app.use('/music', require('./music'));

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

const server = app.listen(app.get('port'), function () {
  console.log('Node app is running on port:', app.get('port'));
});

const io = socketio.listen(server);

let liveDJs = [
  { id:0, username: 'DJ Khaleb', latitude: 40.7156176, longitude: -74.046018,  listeners: 22 },
];


io.on('connection', (socket) => {
  console.log('New Listener connected', socket.id);

  socket.emit('liveDJs', liveDJs);

  socket.on('goLive', (dj) => {
    dj = Object.assign({}, dj, {id: socket.id});
    console.log('Someone went live', dj);
    console.log('socket id', socket.id);
    liveDJs.push(dj);
    socket.broadcast.emit('liveDJs', liveDJs);
    console.log('LiveDJs: ', liveDJs.length);
  });

  socket.on('dj location', (location) => {
    console.log('dj location', location);
    liveDjs = liveDJs.map((dj)=> {
      if (dj.id === socket.id) return Object.assign({}, dj, location);
      return dj;
    })
    socket.broadcast.emit('liveDJs', liveDJs);
    console.log('LiveDJs: ', liveDJs.length);
  });

  socket.on('disconnect', () => {
    console.log('DJ Disconnected:', socket.id);
    liveDJs = liveDJs.filter((dj)=>{
      return dj.id !== socket.id;
    })
    console.log('LiveDJs: ', liveDJs.length);
    socket.broadcast.emit('liveDJs', liveDJs);
  })

});


module.export = server;

