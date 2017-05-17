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
  { id:0, username: 'DJ Khaled', latitude: 40.7156176, longitude: -74.046018,  listeners: 22 },
];


io.on('connection', (socket) => {
  console.log('New Listener connected', socket.id);

  socket.emit('liveDJs', liveDJs);

  socket.on('goLive', (dj) => {
    dj = Object.assign({}, dj, {id: socket.id});
    console.log(`${dj.username} went Live. (SocketId: ${socket.id})`);
    socket.join(dj.username);

    liveDJs.push(dj);

    console.log(`Emitting LiveDJs: ${liveDJs.length}`);
    socket.broadcast.emit('liveDJs', liveDJs);


  });

  socket.on('dj location', (location) => {
    console.log('dj location', location);
    liveDjs = liveDJs.map((dj)=> {
      if (dj.id === socket.id) return Object.assign({}, dj, location);
      return dj;
    });
    socket.broadcast.emit('liveDJs', liveDJs);
  });

  socket.on('joined room', (roomName) => {
    console.log(`Socket: ${socket.id} joined ${roomName}`);
    socket.join(roomName);
    updateRoomListenerCount(roomName);
  });

  socket.on('leave room', (roomName)=> {
    console.log(`Socket: ${socket.id} left ${roomName}`);
    socket.leave(roomName);
    updateRoomListenerCount(roomName);

  });

  socket.on('stop dj', () => {
    console.log(`Stop DJ: ${socket.id}`);
    removeDJ(socket);
  });

  socket.on('song request', (room, song) => {
    console.log(`${socket.id} requested song: ${song}`);
    liveDJs.map(dj =>{
      if( dj.username === room ){
        if (!dj.requestedSongs) dj.requestedSongs = [];
        dj.requestedSongs.push(song);
        return dj;
      }
      return dj;
    });
    console.log(`Emitting: 'song requested' to room: ${room}`);

    io.to(room).emit('song requested', song);
  });

  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected.`);

    // Remove DJ if socket is a DJ
    removeDJ(socket);

    // Update Listeners in DJ if socket is a listener
    updateAllRoomsListenerCount();

  });

});

function removeDJ(socket){
  console.log('Removing DJ with Socket Id: ', socket.id);
  liveDJs = liveDJs.filter((dj)=>{
    return dj.id !== socket.id;
  });
  io.emit('liveDJs', liveDJs);
}

function updateAllRoomsListenerCount(){
  console.log('updateAllRoomListenerCount')
  liveDJs.forEach((djToUpdate) => {
    if (io.in(djToUpdate.username).clients) {
      io.in(djToUpdate.username).clients((err, listeners) => {
        if (err) console.log(err);
        liveDJs = liveDJs.map((dj) =>{
          if (dj.username === djToUpdate.username){
            djToUpdate.listeners = listeners.length - 1;
            if(dj.username === 'DJ Khaled') dj.listeners += 22;
            return djToUpdate
          }
          return dj;
        });
        io.emit('liveDJs', liveDJs);
      });
    }
  });

}


function updateRoomListenerCount(roomName){
  io.in(roomName).clients((err, listeners) => {
    if (err) console.log(err);
    console.log(`${roomName} listeners: ${listeners.length}`);
    liveDjs = liveDJs.map(dj => {
      if (dj.username === roomName) {
        dj.listeners = listeners.length -1;
        if(dj.username === 'DJ Khaled') dj.listeners += 22;
        return dj;
      }
      return dj;
    });
    io.emit('liveDJs', liveDJs);
  });
}


module.export = server;
