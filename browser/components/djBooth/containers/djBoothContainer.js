import { connect } from 'react-redux'
import socketclient from 'socket.io-client'
import djBooth from '../components/djBooth.jsx'
import {loadSongs, addNewSong} from '../../../reducers/djViewer'

const socket = socketclient('192.168.2.23:3000')

const mapStateToProps = state => {

  socket.on('newViewer',function () {
    console.log('I have a new viewer!')
    socket.emit('loadAllSongs',state.djBooth.requestedSongs)
  })

  return state.djBooth};

const mapDispatchToProps = dispatch => {


  return {
    songChange(position,rotation,color,name){
      let attributes= {position,rotation,color,name}

      socket.emit('songChange',attributes)

      dispatch({
        type:'SONG_CHANGE',
        attributes:{position,rotation,color,name}
      })
    }
}}

const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(djBooth);

export default djBoothContainer