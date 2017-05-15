import React from 'react';
import aframe from 'aframe';
import { Scene } from 'aframe-react';

import 'aframe-mouse-cursor-component'
import 'aframe-daydream-controller-component';
import registerClickDrag from 'aframe-click-drag-component';

import DeckContainer from '../containers/DeckContainer'

import Camera from './Camera.jsx';
import DaydreamController from './DaydreamController.jsx';
import Background from './Background.jsx'
import RequestedSongs from './RequestedSongs.jsx';

registerClickDrag(aframe);

class djBooth extends React.Component {
  constructor(props) {
    super(props)
    this.strartStream = this.strartStream.bind(this);
    this.getSong = this.getSong.bind(this);
     
  }

  componentDidMount(){
     this.connection = new RTCMultiConnection();
     this.connection.channel = 'full-stack-academy'
          
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

    // don't play for self
    // this.gainNode.gain.value = 0;

    this.destination = this.context.createMediaStreamDestination();

    this.connection.attachStreams.push(this.destination.stream);

    this.connection.dontCaptureUserMedia = true;

    this.soundSource = null;

  }

  strartStream(e){
      e.preventDefault();
      // console.log(window.location.pathname.split('/')[1])
      this.connection.open('fullstack-academy')
  }

  getSong(e){
        e.preventDefault();

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


  render() {
    console.log('djBooth');

    const { requestedSongs, deck1, deck2 } = this.props;

    return (
      <div className="DJBooth">
        

        <div className="col-xs-9">
          <Scene>
            <Camera />
            <DaydreamController />
            <Background />
            <DeckContainer id="deck1" position="0 2 -2" song={this.props.deck1.song} volume={deck1.volume} />
            <DeckContainer id="deck2" position="0 1 -2" song={this.props.deck2.song} volume={deck2.volume} />
            <RequestedSongs position="2 1.5 -2" rotation="0 -20 0" songs={requestedSongs} />
          </Scene>
        </div>
        <div className="col-xs-12" >


          
          <div className="experiment">
              <h2 className="header">
                  Select Song
              </h2>
   
              
              <form action="#" id='select-form' onSubmit={this.getSong}  >
                  <input type="input" id="video-id" name="videoId" placeholder="Paste in video id" autoComplete="off"/>
                  <input type="submit" value="Play"/>
              </form>

              <button id="openNewSessionButton" >Stream</button>
              
              
              <div id="streams-container">
              </div>
          </div>


        </div>

      </div>
    )
  }
}


export default djBooth;
