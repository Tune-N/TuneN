import { connect } from 'react-redux'
import socketclient from 'socket.io-client'
import djBooth from '../components/djBooth.jsx'
import {loadSongs, addNewSong} from '../../../reducers/djViewer'

const socket = socketclient('192.168.1.12:3000')
let loadedSongs

const mapStateToProps = state => {
  loadedSongs || socket.emit('loadAllSongs',state.djBooth.requestedSongs)
  loadedSongs = true

  return state.djBooth};

const mapDispatchToProps = dispatch => {


  return {
    songChange(position,rotation,color,name){
      console.log('dispatching!')


    }
  }
}

const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(djBooth);

export default djBoothContainer