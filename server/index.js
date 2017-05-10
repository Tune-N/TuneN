const path = require('path');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const startDb = require('../db');

const socketio = require('socket.io')

const app = express();
app.set('port', (process.env.PORT || 3000));

const server = app.listen(app.get('port'), function () {
  console.log('Node app is running on port:', app.get('port'));
  //Promise
  startDb
});

const websocket = socketio(server);

websocket.on('connection', function(socket) {
  console.log('A new client has connected', socket.id)

  socket.on('something', function(data){
    console.log('broadcasting from server')
    socket.broadcast.emit('something', data);
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
