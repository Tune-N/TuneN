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
    this.state={
      volume:'1'
    }
    //#TODO: Chance to arrow binding
    this.startStream = this.startStream.bind(this);
    this.getSong = this.getSong.bind(this);
    this.endSession = this.endSession.bind(this);
    this.volume = this.volume.bind(this);
  }

  createConnetion(){
    const connection = new RTCMultiConnection();
    connection.channel = 'marcos';
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

    
    // Create AudioContext and MediaStream
    this.audioContext = new AudioContext();
    this.broadcastingStream = this.audioContext.createMediaStreamDestination();
    this.connection.attachStreams.push(this.broadcastingStream.stream);

    this.gainNode = this.audioContext.createGain();

  
    this.connection.open('marcos');
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

    request.open('GET', `/music/youtube/mp3/HkVS79y4p4Y`, true);
    request.responseType = 'arraybuffer';
    console.log('this inside getSong', this)
    
    request.onload = () => {
      this.audioContext.decodeAudioData(request.response,(buffer)=>{
        let soundSource = this.audioContext.createBufferSource();
        soundSource.buffer = buffer;
        
        // Broadcast SoundSource to Listeners
        soundSource.connect(this.broadcastingStream);
        
        // Play SoundSource on DJ's Computer
        this.gainNode = this.audioContext.createGain();
        soundSource.connect(this.gainNode);
        this.gainNode.connect(this.audioContext.destination);

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

  volume(e){
    // console.log(elem, this.gainNode)
    this.setState({volume: e.target.value});
    this.gainNode.gain.value = parseFloat(e.target.value);
  }

  render() {
    const requestedSongs = this.props.djBooth.requestedSongs;
    const deck1 = this.props.djBooth.deck1;
    const deck2 = this.props.djBooth.deck2;
    const auth = this.props.auth;

    return (
      <div>
        <div className="DJBooth">
        <input id="volume" className="col-xs-2"  onChange={this.volume} type="range" min="0" max="1" step="0.01" value={this.state.value} />
          {/*<Scene>
            <Camera />
            <DaydreamController />
            <Background />
            <DeckContainer id="deck1" position="0 2 -2" song={this.props.djBooth.deck1.song} volume={deck1.volume} />
            <DeckContainer id="deck2" position="0 1 -2" song={this.props.djBooth.deck2.song} volume={deck2.volume} />
            <RequestedSongs position="2 1.5 -2" rotation="0 -20 0" songs={requestedSongs} />
          </Scene>*/}
      </div>
    </div>
    );
  }
}


export default djBooth;
