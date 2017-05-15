import React from 'react';
import aframe from 'aframe';
import { Scene } from 'aframe-react';

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

    this.startStream = this.startStream.bind(this);
    this.getSong = this.getSong.bind(this);
    this.endSession = this.endSession.bind(this);
  }

  componentDidMount(){
    this.connection = new RTCMultiConnection();
    this.connection.channel = 'full-stack-academy';

    this.connection.session = {
      'video':false,
      audio: true,
      oneway: true
    };

    let  streamsContainer = document.getElementById('streams-container');

    this.connection.onstream = function(e) {
      streamsContainer.appendChild(e.mediaElement);
    };

    // connect to signaling gateway
    this.connection.connect();

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

  startStream(e){
    e.preventDefault();
    // console.log(window.location.pathname.split('/')[1])
    this.connection.open('fullstack-academy');
    console.log(this.connection);
    this.props.djGoesLive()
  }

  getSong(e){
    let request = new XMLHttpRequest();

    // request.open('GET', `/mp3/${videoId}`, true);

    request.open('GET', `/music/youtube/mp3/SZDmuHSqwtg`, true);
    request.responseType = 'arraybuffer';
    request.onload = () => {
      this.context.decodeAudioData(request.response,(buffer)=>{

        if(this.soundSource){
          this.soundSource.disconnect();
        }
        this.soundSource = this.context.createBufferSource();
        this.soundSource.buffer = buffer
        this.soundSource.connect(this.gainNode)
        this.soundSource.connect(this.destination)
        this.soundSource.start(0)

      },null)
    }
    request.send();
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
        <div className="DJBooth">
          <Scene>
            <Camera />
            <DaydreamController />
            <Background />
            <DeckContainer id="deck1" position="0 2 -2" song={this.props.djBooth.deck1.song} volume={deck1.volume} />
            <DeckContainer id="deck2" position="0 1 -2" song={this.props.djBooth.deck2.song} volume={deck2.volume} />
            <RequestedSongs position="2 1.5 -2" rotation="0 -20 0" songs={requestedSongs} />
          </Scene>
      </div>
    </div>
    );
  }
}


export default djBooth;
