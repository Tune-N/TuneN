import React from 'react';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

import RoomCard from './RoomCard.jsx';

const style = {
  margin: 20,
  padding: 20,
  flexGrow: 2,
  height: 600
};


const DJsList = (props) => {
  const { liveDJs } = props;
  console.log('DJsList props', liveDJs);
  return (
  <div id="rooms_list" style={style}>
    <Paper zDepth={2} >
      <Subheader style={{ color: '#FFFFFF', fontSize: 20 }}>Top DJ Rooms</Subheader>
        {liveDJs.map(dj => (
          <RoomCard key={dj.username} name={dj.username} listeners={dj.listeners} />
          ))
        }
    </Paper>
  </div>
  )

};

export default DJsList;
