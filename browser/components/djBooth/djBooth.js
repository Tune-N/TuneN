import React from 'react';
import aframe from 'aframe';
import { Scene, Entity } from 'aframe-react';

import 'aframe-mouse-cursor-component'
import 'aframe-daydream-controller-component';
import registerClickDrag from 'aframe-click-drag-component';

import Camera from './components/Camera.jsx';
import DaydreamController from './components/DaydreamController.jsx';
import Background from './components/Background.jsx'
import Deck from './components/Deck.jsx';
import RequestedSongs from './components/RequestedSongs.jsx'

registerClickDrag(aframe);

const dragEndHandler = (event) => {
  console.log('dragend event', event);

};

const djBooth = (props) => {
  return (
    <div className="DJBooth">
      <Scene
        events={{
          'dragend': dragEndHandler
        }}
      >
        <Camera />
        <DaydreamController />
        <Background />
        <Deck id="deck1" position="0 2 -2" />
        <Deck id="deck2" position="0 1 -2" />
        <RequestedSongs position="2 1.5 -2" rotation="0 -20 0" />
      </Scene>
    </div>
  )
};

export default djBooth;
