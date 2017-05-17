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

let test = [{ name: "Adele - Hello", votes: 0 }, { name: "Future - Mask Off", votes: 1506783 }];

const RequestedSongs = (props) => {
  console.log('RequestedSongList', props);
  //if we want to sort the votes on the front end, or at least here specifically
  let sortedVotes = test.sort((a, b) => {
    return a.votes < b.votes;
  });

  return (
  <div id="rooms_list" style={style}>
    <Paper zDepth={2} >
      <Subheader style={{ color: '#FFFFFF', fontSize: 20 }}>Top Requested Songs</Subheader>
        {sortedVotes.map(song => (
          <RequestedSongCard key={song.name} name={song.name} votes={song.votes} />
          ))
        }
    </Paper>
  </div>
  )

};

export default RequestedSongs;
