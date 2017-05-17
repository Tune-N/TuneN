import React from 'react';
import aframe from 'aframe';
import { Scene, Entity } from 'aframe-react';
import canUseDOM from 'can-use-dom';

import 'aframe-mouse-cursor-component';
import 'aframe-daydream-controller-component';
import registerClickDrag from 'aframe-click-drag-component';

import DeckContainer from '../containers/DeckContainer';

import Camera from './Camera.jsx';
import DaydreamController from './DaydreamController.jsx';
import Background from './Background.jsx';
import RequestedSongs from './RequestedSongs.jsx';


registerClickDrag(aframe);

/* globals window, navigator, AudioContext, RTCMultiConnection, XMLHttpRequest */

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

  goLive() {
    const { goLive, username } = this.props;
    const geoLocation = canUseDOM && navigator.geolocation;
    geoLocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      goLive(username, latitude, longitude);
    });
  }


  componentDidMount() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    this.connection = this.createConnection();
    this.connection.connect();

    // Create AudioContext and MediaStream
    this.audioContext = new AudioContext();
    this.broadcastingStream = this.audioContext.createMediaStreamDestination();
    this.connection.attachStreams.push(this.broadcastingStream.stream);
    this.connection.open('fullstack-academy');

    this.goLive();
  }

  componentWillUnmount() {
    this.props.endSession(this.props.username);
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

            <Entity
              primitive="a-image"
              id="floor" src="https://cdn.aframe.io/a-painter/images/floor.jpg"
              crossOrigin="anonymous"
            />

            <Entity
              primitive="a-image"
              id="skymap"
              src="https://cdn.aframe.io/a-painter/images/sky.jpg"
              crossOrigin="anonymous"
            />
            <Entity
              primitive="a-mixin"
              id="bar"
              geometry="primitive: box"
              material="color: rgb(10, 20, 50); shader: flat"
              scale-y-color="from: 10 20 50; to: 210, 220, 250; maxScale: 15"
            />

            <Entity
              audioanalyser-levels-scale="analyserEl: #analyser; max: 50; multiplier: 0.06"
              entity-generator="mixin: bar; num: 128"
              layout="type: circle; radius: 10"
              rotation="0 180 0"
            />

            <Entity
              primitive="a-light"
              type="ambient"
              color="#222"
            />
            <Entity
              primitive="a-light"
              audioanalyser-volume-bind="analyserEl: #analyser; component: light; property: intensity; max: 2.2; multiplier: .01"
              position="1 2 1"
              type="point"
            />
            <Entity
              id="sky"
              geometry="primitive: sphere; radius: 500; phiLength: 360; phiStart: 0; thetaLength: 90"
              material="shader: flat; side: back; height: 2048; src: #skymap; width: 2048"
            />
            <Entity
              id="ground"
              geometry="primitive: circle; radius: 30.5"
              rotation="-90 0 0"
              material="src: #floor"
            />
            <Entity particle-system="preset: snow"></Entity>

          </Scene>
      </div>
    </div>
    );
  }
}


export default djBooth;
