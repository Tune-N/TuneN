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
  render(){
    console.log('djBooth render()', this.props);
    const { requestedSongs, deck1, deck2 } = this.props;

    return (
      <div className="DJBooth">
        <Scene events={{
          click: (e) => console.log('Scene Clicked', e),
          'buttonup': (e) => {
            console.log('buttonup');
            console.log('event', e);
            const remote = e.target;
            console.log('remote', remote);
            const raycaster = remote.getAttribute('raycaster');
            console.log('raycaster', raycaster);
            console.log('remote.components.raycaster.raycaster', remote.components.raycaster.raycaster);

          }
        }}>
          <Camera />
          <DaydreamController />
          <Background />
          <Deck id="deck1" position="0 2 -2" song={deck1.song} volume={deck1.volume}/>
          <Deck id="deck2" position="0 1 -2" song={deck1.song} volume={deck1.volume}/>
          <RequestedSongs position="2 1.5 -2" rotation="0 -20 0" songs={requestedSongs} />
        </Scene>
      </div>
    )
  }
}


export default djBooth;
