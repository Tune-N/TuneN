import React from 'react';
import aframe from 'aframe';
import { Scene } from 'aframe-react';

import Camera from './Camera.jsx';
import Background from './Background.jsx'
import DeckContainer from '../containers/DeckContainer';
import DeckViewer from './DeckViewer'
import ViewerSongs from './ViewerSongs.jsx'


class djBooth extends React.Component {

  render(){
    console.log('ViewerPROPS', this.props);

    return (
      <div className="DJBooth">
        <Scene>
          <Camera />
          <Background />
          <DeckViewer id="deck1" position="0 2 -2" song={this.props.deck1} />
          <DeckViewer id="deck2" position="0 1 -2" song={this.props.deck2} />
          <ViewerSongs {...this.props} />
        </Scene>
      </div>
    )
  }
}


export default djBooth;