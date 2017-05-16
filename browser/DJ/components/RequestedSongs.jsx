import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

import RequestedSongContainer from '../containers/RequestedSongContainer'

const RequestedSongs = (props) => {

  const {position, rotation, songs} = props;
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
        height="0.90"
        width="0.75"
        position="0 0.90 0.02"
        align="center"
      />
      {
        songs.map((song, index) => (
          <RequestedSongContainer
            id={song.id.videoId}
            position={`0 ${0.80-0.17 * index} 0.02`}
            key={song.id.videoId}
            name={song.snippet.title}
            image={song.snippet.thumbnails.default.url}
          />
        ))
      }
    </Entity>
  )
};

export default RequestedSongs;

