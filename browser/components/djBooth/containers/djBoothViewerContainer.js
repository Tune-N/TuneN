import { connect } from 'react-redux'
import socketclient from 'socket.io-client'
import store from '../../../store'

import djBoothViewer from '../components/djBoothViewer.jsx'

const socket = socketclient('192.168.2.23:3000')

setTimeout(function () {
  socket.emit('newViewer','')
},1000)

socket.on('songChange',function(attributes){
  console.log('attributes',attributes)
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

const mapStateToProps = state => (state.djViewer);

const mapDispatchToProps = dispatch => {
  return {}
};

const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(djBoothViewer);

export default djBoothContainer
