import React from 'react';
import aframe from 'aframe';
import { Scene } from 'aframe-react';

import 'aframe-mouse-cursor-component';
import 'aframe-daydream-controller-component';
import registerClickDrag from 'aframe-click-drag-component';

import DeckContainer from '../containers/DeckContainer';

import Camera from './Camera.jsx';
import DaydreamController from './DaydreamController.jsx';
import Background from './Background.jsx';
import RequestedSongs from './RequestedSongs.jsx';


registerClickDrag(aframe);

/* globals window, AudioContext, RTCMultiConnection, XMLHttpRequest */

class djBooth extends React.Component {
  constructor(props) {
    super(props);

    // #TODO: Chance to arrow binding
    this.startStream = this.startStream.bind(this);
    this.getSong = this.getSong.bind(this);
  }

  createConnection() {
    const connection = new RTCMultiConnection();
    connection.channel = 'full-stack-academy';
    connection.dontCaptureUserMedia = true;
    connection.session = {
      video: false,
      audio: true,
      oneway: true,
    };

    return connection;
  }

  componentDidMount() {
    console.log('djBooth', this.props)
    const { user, goLive } = this.props;
    goLive('test2'); // Change to user.username but ComponentDidMount fires before thunk

    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    this.connection = this.createConnection();
    this.connection.connect();
    console.log('connection', this.connection);
    
    // Create AudioContext and MediaStream
    this.audioContext = new AudioContext();
    this.broadcastingStream = this.audioContext.createMediaStreamDestination();
    this.connection.attachStreams.push(this.broadcastingStream.stream);

  
    this.connection.open('fullstack-academy');

  }

  componentWillUnmount() {
    this.props.endSession('test2');
  }

  startStream(e) {
    e.preventDefault();
    // this.connection.open('fullstack-academy');
    console.log(this.connection);

  }

  getSong(e){
    const request = new XMLHttpRequest();

    // request.open('GET', `/mp3/${videoId}`, true);

    request.open('GET', `/music/youtube/mp3/5qm8PH4xAss`, true);
    request.responseType = 'arraybuffer';
    
    request.onload = () => {
      this.audioContext.decodeAudioData(request.response,(buffer)=>{
        let soundSource = this.audioContext.createBufferSource();
        soundSource.buffer = buffer;
        
        // Broadcast SoundSource to Listeners
        soundSource.connect(this.broadcastingStream);
        
        // Play SoundSource on DJ's Computer
        let gainNode = this.audioContext.createGain();
        soundSource.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        soundSource.start(0)

      },null)
    };
    request.send();
  }

  render() {
    const { deck1, deck2, requestedSongs } = this.props.djBooth;

    return (
      <div>
        <div className="DJBooth">
          <Scene>
            <Camera />
            <DaydreamController />
            <Background />
            <DeckContainer
              id="deck1" position="0 2 -2" song={this.props.djBooth.deck1.song} volume={deck1.volume} />
            <DeckContainer id="deck2" position="0 1 -2" song={this.props.djBooth.deck2.song} volume={deck2.volume} />
            <RequestedSongs position="2 1.5 -2" rotation="0 -20 0" songs={requestedSongs} />
          </Scene>
      </div>
    </div>
    );
  }
}


export default djBooth;
