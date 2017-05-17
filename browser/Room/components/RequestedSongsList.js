import React from 'react';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

import RequestedSongCard from './RequestedSongCard';

const style = {
  margin: 20,
  padding: 20,
  flexGrow: 2,
  height: 600,
};


const RequestedSongs = (props) => {
  console.log('RequestedSongList', props);
  const { requestedSongs } = props;
  return (
  <div id="rooms_list" style={style}>
    <Paper zDepth={2} >
      <Subheader style={{ color: '#FFFFFF', fontSize: 20 }}>Top Requested Songs</Subheader>
        {requestedSongs.map(song => (
          <RequestedSongCard key={song.id.videoId} name={song.snippet.title} votes={10} />
          ))
        }
    </Paper>
  </div>
  )

};

export default RequestedSongs;
