import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

import RequestedSongContainer from '../containers/RequestedSongContainer'
import RequestedSongViewer from './RequestedSongViewer'

const RequestedSongs = (props) => {

  const {position, rotation, songs} = props;
  return (
    <Entity
      id="requestedSongs"
      primitive="a-plane"
      color="#CC181E"
      width="1"
      height="2"
      material={{
        opacity: 0.90,
      }}
      position={position}
      rotation={rotation}>
      <Entity
        primitive="a-text"
        value="Top Requested Songs"
        color="white"
        height="0.90"
        width="0.90"
        position="0 0.90 0.02"
        align="center"
      />
      {
        songs.map((song, index) => (
          <RequestedSongViewer
            position={`0 ${0.80-0.17 * index} 0.02`}
            name={song.name}
            key = {song.name}
            color = {song.color}
          />
        ))
      }
    </Entity>
  )
};

export default RequestedSongs;

