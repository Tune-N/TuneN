import React from 'react';
import { connect } from 'react-redux'

import RoomCard from './RoomCard.jsx'
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const style = {
  margin: 20,
  padding: 20,
  flexGrow: 2,
  height: 600
};

const RoomsList = (props) => {
  console.log('RoomsList', props);
  const { rooms } = props;
  return (
  <div id="rooms_list" style={style}>
    <Paper zDepth={2} >
      <Subheader style={{color:'#FFFFFF', fontSize:20}}>Top DJ Rooms</Subheader>
    {
      rooms.map( room => (
          <RoomCard key={room.username} name={room.username} listeners={room.listeners}/>
        )
      )
    }
    </Paper>
  </div>
  )

};

const mapStateToProps = (state) => ({
  rooms: state.rooms.list,
});

const mapDispatchToProps = {};

const RoomsListContainer = connect(mapStateToProps, mapDispatchToProps)(RoomsList);

export default RoomsListContainer;
