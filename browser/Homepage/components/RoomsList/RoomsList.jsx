import React from 'react';

import RoomCard from './RoomCard.jsx'

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
    <h4>Top DJ Rooms</h4>
    {
      djs.map(dj => (
        <RoomCard key={dj.username} name={dj.username} listeners={dj.listeners}/>
        )
      )
    }
  </div>
  )

};

export default DJsList;
