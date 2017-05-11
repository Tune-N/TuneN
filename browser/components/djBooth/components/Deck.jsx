import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';
import store from '../../../store';
import { filterSongs, setDeck1Song, setDeck2Song } from '../../../reducers/djBooth.reducer';


function dragend(event) {
  console.log('dragEnd', this);
  if (this.is('hovered')) console.log('Dropped inside Deck 1');

}

class Deck extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log('Deck()', this.props);
    return (
      <Entity
        className="selectable"
        id={this.props.id}
        primitive="a-plane"
        material={{
          color: 'white',
          opacity: 0.70,
          wireframe: true
        }}
        position={this.props.position}
        width="1.50"
        height="0.50"
        events={{
          dragend: dragend,
          click: (e) => {
            console.log('Click!');
            const id = e.srcElement.id;
            const state = store.getState();
            const songId = state.djBooth.selectedSong;
            const song = state.djBooth.requestedSongs.filter(sng => sng.id === songId);
            if (song[0]){
              id === 'deck1' ? store.dispatch(setDeck1Song(song[0])) : store.dispatch(setDeck2Song(song[0]));
            }
            store.dispatch(filterSongs(songId));
          }
        }}
      >
        {this.props.song.name ?
          <Entity
            primitive="a-text"
            value={this.props.song.name}
            width="1.00"
            align="center"
          /> : <div></div>
        }
      </Entity>
    )
  }
};


export default Deck;
