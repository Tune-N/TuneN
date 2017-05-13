import React from 'react';
import aframe from 'aframe';
import { Scene } from 'aframe-react';

import Camera from './Camera.jsx';
import Background from './Background.jsx'
import Deck from './Deck.jsx';
import ViewerSongs from './ViewerSongs.jsx'


class djBooth extends React.Component {

  render(){
    console.log('ViewerPROPS', this.props);

    return (
      <div className="DJBooth">
        <Scene>
          <Camera />
          <Background />
          <Deck id="deck1" position="0 2 -2" />
          <Deck id="deck2" position="0 1 -2" />
          <ViewerSongs {...this.props} />
        </Scene>
      </div>
    )
  }
}


export default djBooth;