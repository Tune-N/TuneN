import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

import RequestedSong from './RequestedSong.jsx'

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
      {
        songs.map((song, index) => (
          <RequestedSong
            id={song.name}
            position={`0 ${0.80-0.17 * index} 0.02`}
            key={song.name}
            name={song.name}
            album={song.album}
            artist={song.artist}
            image={song.image}
            songChange={props.songChange}
          />
        ))
      }
    </Entity>
  )
};

export default RequestedSongs;

