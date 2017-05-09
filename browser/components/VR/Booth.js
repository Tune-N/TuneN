import React from 'react';
import aframe from 'aframe';
import { Scene, Entity } from 'aframe-react';
require('aframe-daydream-controller-component');
import 'aframe-mouse-cursor-component'
import registerClickDrag from 'aframe-click-drag-component';

import Song from './components/Song.jsx';
import Deck from './components/Deck';

function onClick(){
  const song1 = document.getElementById('song1');
  song1.setAttribute('color', 'yellow')


}

registerClickDrag(aframe);

export default class extends React.Component {

  render() {
    return (
      <div className="main">
        <Scene>
          <Entity position="0 0 0">
            <Entity primitive="a-camera" mouse-cursor id="cursor">
            </Entity>
            <Entity
              daydream-controller
              id="remote"
              raycaster="objects: .selectable"
              events={{'buttondown':onClick}}
            >
              <Entity
                primitive="a-cone"
                color="cyan"
                position="0 0 -2"
                rotation="-90 0 0"
                radius-bottom="0.005"
                radius-top="0.001"
                height="4"
              />
              <Entity
                primitive="a-box"
                id="position-guide"
                position="0 0 -1"
                visible="false"
              />
            </Entity>
          </Entity>
          <Entity primitive="a-sky" color="#2d2c2c" />
          <Deck position="-2 2 -2" />
          <Song id="song1" text="Song 1" textColor="black" position="0 2 -2" />
          <Song id="song2" text="Song 2" textColor="black" position="0 1 -2" />
        </Scene>
      </div>
)}
}