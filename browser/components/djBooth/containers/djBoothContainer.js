import { connect } from 'react-redux'
import socketclient from 'socket.io-client'
import djBooth from '../components/djBooth.jsx'

const socket = socketclient(window.location.origin)
//TODO put socketon on componentDidMount, unsubscribe on unmount
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