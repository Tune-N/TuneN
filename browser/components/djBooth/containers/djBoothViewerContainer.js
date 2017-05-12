import { connect } from 'react-redux'
import socketclient from 'socket.io-client'
import store from '../../../store'

import djBoothViewer from '../components/djBoothViewer.jsx'

const socket = socketclient('192.168.1.12:3000')
socket.on('loadAllSongs', function (songList) {
  console.log('receiving songs', songList)
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
