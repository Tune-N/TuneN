import React from 'react';

import RoomCard from './RoomCard.jsx'
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const style = {
  margin: 20,
  padding: 20,
  flexGrow: 2,
  height: 600
};

const DJsList = (props) => {
  const { djs } = props;
  return (
  <div id="rooms_list" style={style}>
    <Paper zDepth={2} >
      <Subheader style={{color:'#FFFFFF', fontSize:20}}>Top DJ Rooms</Subheader>
        {djs.map(dj => (
          <RoomCard key={dj.username} name={dj.username} listeners={dj.listeners}/>
          ))
        }
    </Paper>
  </div>
  )

};

export default DJsList;
