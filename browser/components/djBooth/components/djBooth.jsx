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
import RequestedSongs from './RequestedSongs.jsx'

registerClickDrag(aframe);

class djBooth extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deck1: null
    };

    this.dragEndHandler = this.dragEndHandler.bind(this);
  }

  componentDidMount(){
    this.deck1 = document.getElementById('deck1');
    this.deck2 = document.getElementById('deck2');
  }

  dragEndHandler(event) {
    if (this.deck1.is('hovered')){
      console.log('Dropped inside Deck 1');
      this.setState({deck1:'My Song'});
    }
  }

  render(){
    console.log('rendering djBooth, props', this.props);
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
