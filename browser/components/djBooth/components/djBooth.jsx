import React from 'react';
import aframe from 'aframe';
import { Scene } from 'aframe-react';

import 'aframe-mouse-cursor-component'
import 'aframe-daydream-controller-component';
import registerClickDrag from 'aframe-click-drag-component';

import Camera from './Camera.jsx';
import DaydreamController from './DaydreamController.jsx';
import Background from './Background.jsx'
import Deck from './Deck.jsx';
import RequestedSongs from './RequestedSongs.jsx';
import { selectSong, filterSongs, setDeck1Song, setDeck2Song } from '../../../reducers/djBooth.reducer';
import store from '../../../store';

registerClickDrag(aframe);

class djBooth extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('djBooth render()', this.props);
    const { requestedSongs, deck1, deck2 } = this.props;

    return (
      <div className="DJBooth">
        <Scene events={{
          buttonup: (e) => {
            console.log('buttonup');
            const remote = e.target;
            const selectedId = remote.components.raycaster.intersectedEls[0].id;
            store.dispatch(selectSong(+selectedId));
          },
          buttondown: (e) => {
            console.log('Raycaster Click!');
            const remote = e.target;
            const id = remote.components.raycaster.intersectedEls[0].id;
            //other login to update deck here
            const state = store.getState();
            const songId = state.djBooth.selectedSong;
            const song = state.djBooth.requestedSongs.filter(sng => sng.id === songId);
            if (song[0]) {
              id === 'deck1' ? store.dispatch(setDeck1Song(song[0])) : store.dispatch(setDeck2Song(song[0]));
            }
            store.dispatch(filterSongs(songId));
          },
        }}>
          <Camera />
          <DaydreamController />
          <Background />
          <Deck id="deck1" position="0 2 -2" song={this.props.deck1.song} volume={deck1.volume} />
          <Deck id="deck2" position="0 1 -2" song={this.props.deck2.song} volume={deck1.volume} />
          <RequestedSongs position="2 1.5 -2" rotation="0 -20 0" songs={requestedSongs} />
        </Scene>
      </div>
    )
  }
}


export default djBooth;
