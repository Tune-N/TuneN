import React from 'react';
import aframe from 'aframe';
import { Scene } from 'aframe-react';

import 'aframe-mouse-cursor-component';
import 'aframe-daydream-controller-component';
import registerClickDrag from 'aframe-click-drag-component';

import DeckContainer from '../containers/DeckContainer'

import Camera from './Camera.jsx';
import DaydreamController from './DaydreamController.jsx';
import Background from './Background.jsx';
import RequestedSongs from './RequestedSongs.jsx';
import GoLive from './GoLive.jsx';
import { whoami } from '../../../reducers/auth';
import axios from 'axios';
import store from '../../../store';
import { connect } from 'react-redux';
import { getLiveDjs } from '../../../reducers/liveDjs';

registerClickDrag(aframe);

class djBooth extends React.Component {
  constructor(props) {
    super(props);

    this.endSession = this.endSession.bind(this);
  }

  endSession() {
    axios.put(`/api/users/${this.props.id}`, { isLive: false })
    .then(res => {
      store.dispatch(whoami());
    })
    .then(res => {
      getLiveDjs();
    });
  }

  render() {
    console.log('props in dj booth', this.props);

    const requestedSongs = this.props.djBooth.requestedSongs;
    const deck1 = this.props.djBooth.deck1;
    const deck2 = this.props.djBooth.deck2;
    const auth = this.props.auth;

    return (
      <div>
      { auth && auth.isLive ?
        <div className="DJBooth">
          <button type="button" onClick={() => this.endSession()}>End DJ Session</button>
          <Scene>
            <Camera />
            <DaydreamController />
            <Background />
            <DeckContainer id="deck1" position="0 2 -2" song={this.props.djBooth.deck1.song} volume={deck1.volume} />
            <DeckContainer id="deck2" position="0 1 -2" song={this.props.djBooth.deck2.song} volume={deck2.volume} />
            <RequestedSongs position="2 1.5 -2" rotation="0 -20 0" songs={requestedSongs} />
          </Scene>
      </div>
      :
      <GoLive />
    }
    </div>
    );
  }
}

const mapState = (state) => ({
  id: state.auth ? state.auth.id : '',
});

export default connect(mapState, null)(djBooth);
