import React from 'react';

import AppBar from 'material-ui/AppBar';

const Homepage = (props) => {
  return (
    <div>
      <AppBar
        title="TuneN"
      />
      <h1>Live DJs</h1>
      <div id="homepage">
        <div id="rooms_map">
          Map
        </div>
        <div id="rooms_list">
          Top DJ Rooms
        </div>
      </div>
    </div>

  )
};

export default Homepage;
