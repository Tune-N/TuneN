import { connect } from 'react-redux'
import socketclient from 'socket.io-client'
import store from '../../../store'

import djBoothViewer from '../components/djBoothViewer.jsx'

const socket = socketclient('192.168.1.11:3000')

setTimeout(function () {
  socket.emit('newViewer','')
},1000)

socket.on('songChange',function(attributes){
  store.dispatch({
    type: 'SONG_CHANGE',
    attributes
  })
})

socket.on('loadAllSongs', function (songList) {
  store.dispatch({
    type:'LOAD_SONGS',
    songList
  })
})

socket.on('removeSong', function (songName) {
  store.dispatch({
    type:'REMOVE_SONG',
    songName
  })
})

let counter = 0
socket.on('setDeckSong', function (songDeck) {
  counter +=1
  console.log('dispatching',counter)
  store.dispatch({
    type:'SET_DECKS_SONG',
    songDeck
  })
})

const mapStateToProps = state => (state.djViewer);

const mapDispatchToProps = dispatch => {
  return {}
};

const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(djBoothViewer);

export default djBoothContainer
