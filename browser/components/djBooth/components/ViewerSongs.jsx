import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

import ViewerSong from './ViewerSong.jsx'

const ViewerSongs = (props) => {
  console.log('RequestedSongs props', props);

  const {position, rotation, songList } = props;
  console.log('songList',songList)
  return (
    <Entity
      id="requestedSongs"
      primitive="a-plane"
      color="white"
      width="1"
      height="2"
      position="2 1.5 -2"
      rotation="0 -20 0">
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
        Object.keys(songList).map((songKey) => (
          <ViewerSong {...songList[songKey]} key={songKey}/>
        ))
      }
    </Entity>
  )
};

export default ViewerSongs;

