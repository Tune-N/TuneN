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

    //#TODO: Chance to arrow binding
    this.startStream = this.startStream.bind(this);
    this.getSong = this.getSong.bind(this);
    this.endSession = this.endSession.bind(this);
  }

  createConnetion(){
    const connection = new RTCMultiConnection();
    connection.channel = 'full-stack-academy';
    connection.dontCaptureUserMedia = true;
    connection.session = {
      video:false,
      audio: true,
      oneway: true
    };

    return connection;
  }

  createAudioContext

  componentDidMount(){
    
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    this.connection = this.createConnetion()
    this.connection.connect()
    console.log('connection', this.connection);

    
    // Create AudioContext and MediaStream
    this.audioContext = new AudioContext();
    this.broadcastingStream = this.audioContext.createMediaStreamDestination();
    this.connection.attachStreams.push(this.broadcastingStream.stream);

  
    this.connection.open('fullstack-academy');
    this.getSong()
  }

  startStream(e){
    e.preventDefault();
    // this.connection.open('fullstack-academy');
    console.log(this.connection);
    this.props.djGoesLive()
  }

  getSong(e){
    let request = new XMLHttpRequest();

    // request.open('GET', `/mp3/${videoId}`, true);

    request.open('GET', `/music/youtube/mp3/5qm8PH4xAss`, true);
    request.responseType = 'arraybuffer';
    console.log('this inside getSong', this)
    
    request.onload = () => {
      console.log('this inside onload',this)
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
