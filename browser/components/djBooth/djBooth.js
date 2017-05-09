import React from 'react';
import aframe from 'aframe';
import { Scene } from 'aframe-react';

import 'aframe-mouse-cursor-component'
import 'aframe-daydream-controller-component';
import registerClickDrag from 'aframe-click-drag-component';

import Camera from './components/Camera.jsx';
import DaydreamController from './components/DaydreamController.jsx';
import Background from './components/Background.jsx'
import Deck from './components/Deck.jsx';
import RequestedSongs from './components/RequestedSongs.jsx'

registerClickDrag(aframe);

class djBooth extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deck1: null
    };

    this.dragEndHandler = this.dragEndHandler.bind(this);
  }

  dragEndHandler(event) {
    console.log('dragend event', event);
    const deck1 = document.getElementById('deck1');
    const deck2 = document.getElementById('deck2');

    const draggedItem = event.target;

    console.log('draggedItemPosition', draggedItemPosition);

    if (deck1.is('hovered')){
      console.log('Dropped inside Deck 1');
      this.setState({deck1:'My Song'}});
    }
  }

  render(){
    console.log('rendering djBooth');
    return (
      <div className="DJBooth">
        <Scene
          events={{
            'dragend': this.dragEndHandler
          }}
        >
          <Camera />
          <DaydreamController />
          <Background />
          <Deck id="deck1" position="0 2 -2" songName={this.state.deck1} />
          <Deck id="deck2" position="0 1 -2" />
          <RequestedSongs position="2 1.5 -2" rotation="0 -20 0" />
        </Scene>
      </div>
    )
  }
}


export default djBooth;
