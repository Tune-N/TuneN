import React from 'react';
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper';
import RoomCard from './RoomCard.jsx'

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
    <h4>Top DJ Rooms</h4>
    {
      rooms.map( room => (
          <RoomCard name={room.name} listeners={room.listeners}/>
        )
      )
    }
  </div>
  )

};

const mapStateToProps = (state) => ({
  rooms: state.rooms.list,
});

const mapDispatchToProps = {};

const RoomsListContainer = connect(mapStateToProps, mapDispatchToProps)(RoomsList);

export default RoomsListContainer;
