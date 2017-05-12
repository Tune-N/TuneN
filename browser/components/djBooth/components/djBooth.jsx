import React from 'react';
import aframe from 'aframe';
import { Scene } from 'aframe-react';

import 'aframe-mouse-cursor-component'
import 'aframe-daydream-controller-component';
import registerClickDrag from 'aframe-click-drag-component';

import DeckContainer from '../containers/DeckContainer'

import Camera from './Camera.jsx';
import DaydreamController from './DaydreamController.jsx';
import Background from './Background.jsx'
import RequestedSongs from './RequestedSongs.jsx';

registerClickDrag(aframe);

class djBooth extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('djBooth');

    const { requestedSongs, deck1, deck2 } = this.props;

    return (
      <div className="DJBooth">
        <Scene>
          <Camera />
          <DaydreamController />
          <Background />
          <DeckContainer id="deck1" position="0 2 -2" song={this.props.deck1.song} volume={deck1.volume} />
          <DeckContainer id="deck2" position="0 1 -2" song={this.props.deck2.song} volume={deck2.volume} />
          <RequestedSongs position="2 1.5 -2" rotation="0 -20 0" songs={requestedSongs} />
        </Scene>
      </div>
    )
  }
}


export default djBooth;
