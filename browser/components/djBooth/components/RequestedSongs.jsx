import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

import Song from './Song.jsx'


const RequestedSongs = (props) => {
  console.log('RequestedSongs props', props);

  const {position, rotation, songs } = props;
  return (
    <Entity
      id="requestedSongs"
      primitive="a-plane"
      color="white"
      width="1"
      height="2"
      position={position}
      rotation={rotation}>
      <Entity
        primitive="a-text"
        value="Top Requested Songs"
        color="black"
        height="0.05"
        width="0.75"
        position="0 0.85 0"
        align="center"
      />

      <Song
        id="song1"
        position="0 0.7 0.02"
        name="Song Name"
        album="Album Name"
        artist="Artist"
        image="Image"
        />
    </Entity>
  )
};

export default RequestedSongs;

