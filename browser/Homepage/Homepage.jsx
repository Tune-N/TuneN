import React from 'react';

import Navbar from './components/Navbar.jsx'
import RoomsList from './components/RoomsList/RoomsList.jsx'
import RoomsMap from './components/RoomsMap.jsx'

const Homepage = (props) => {
  return (
    <div>
      <Navbar />
      <h1>Live DJs</h1>
      <div id="homepage">
        <RoomsMap
          id="rooms_map"
          containerElement={<div id="rooms_map"/>}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <RoomsList />
      </div>
    </div>

  )
};

export default Homepage;
