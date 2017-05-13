import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';


const ViewerSong = (props) => {
  const { position, name, rotation, color} = props;
  return (
    <Entity
      primitive="a-plane"
      className="Song selectable "
      width="0.90"
      height="0.15"
      color={color}
      position={position}
      rotation={rotation}
    >
      {/*Song Name*/}
      <Entity
        primitive="a-text"
        value={name}
        color="black"
        position="-0.42 0.04 0"
        width="0.80"
      />

      {/*/!*Album Name*!/*/}
      {/*<Entity*/}
      {/*primitive="a-text"*/}
      {/*value={albumName}*/}
      {/*color="black"*/}
      {/*position="-0.40 0 0"*/}
      {/*width="0.60"*/}
      {/*/>*/}
    </Entity>


  );
};

export default ViewerSong;
