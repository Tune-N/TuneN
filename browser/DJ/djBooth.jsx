import React from 'react';
import aframe from 'aframe';
import { Scene, Entity } from 'aframe-react';

import 'aframe-mouse-cursor-component';
import 'aframe-daydream-controller-component';
import registerClickDrag from 'aframe-click-drag-component';

import DeckContainer from './containers/DeckContainer'

import Camera from './components/Camera.jsx';
import DaydreamController from './components/DaydreamController.jsx';
import Background from './components/Background.jsx';
import RequestedSongs from './components/RequestedSongs.jsx';


registerClickDrag(aframe);

class djBooth extends React.Component {
  constructor(props) {
    super(props);

    //#TODO: Chance to arrow binding
    this.startStream = this.startStream.bind(this);
    this.getSong = this.getSong.bind(this);
    this.endSession = this.endSession.bind(this);
  }

  componentDidMount() {
    this.connection = new RTCMultiConnection();
    this.connection.channel = 'full-stack-academy';

    this.connection.session = {
      video: false,
      audio: true,
      oneway: true
    };

    let streamsContainer = document.getElementById('streams-container');

    this.connection.onstream = function (e) {
      //dispatch
      streamsContainer.appendChild(e.mediaElement);
    };

    // connect to signaling gateway
    this.connection.connect();
    //clean up into function
    //Audio Section
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    this.context = new AudioContext();

    this.gainNode = this.context.createGain();

    this.gainNode.connect(this.context.destination);


    this.destination = this.context.createMediaStreamDestination();

    this.connection.attachStreams.push(this.destination.stream);
    this.connection.dontCaptureUserMedia = true;

    this.soundSource = null;
    this.getSong()
  }

  startStream(e) {
    e.preventDefault();
    this.connection.open('fullstack-academy');
    console.log(this.connection);
    this.props.djGoesLive()
  }

  getSong(e) {
    let request = new XMLHttpRequest();

    // request.open('GET', `/mp3/${videoId}`, true);

    request.open('GET', `https://p.scdn.co/mp3-preview/4177d725cd93fa1753babdd73a69d285df100417?cid=null`, true);
    request.responseType = 'arraybuffer';
    request.onload = () => {
      this.context.decodeAudioData(request.response, (buffer) => {

        if (this.soundSource) {
          this.soundSource.disconnect();
        }
        this.soundSource = this.context.createBufferSource();
        this.soundSource.buffer = buffer;
        this.soundSource.connect(this.gainNode);
        this.soundSource.connect(this.destination);
        this.soundSource.start(0)

      }, null)
    };
    request.send();
  }

  //#TODO: move into action creator
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
    const requestedSongs = this.props.djBooth.requestedSongs;
    const deck1 = this.props.djBooth.deck1;
    const deck2 = this.props.djBooth.deck2;
    const auth = this.props.auth;

    return (
      <div>
        <div className="DJBooth">
          <Scene antialias="true">
            <Camera />
            <DaydreamController />
            <Background />
            <DeckContainer id="deck1" position="0 2 -2" song={this.props.djBooth.deck1.song} volume={deck1.volume} />
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
      </div >
    );
  }
}


export default djBooth;
