import React from 'react';
import Youtube from '../components/Youtube'

import '../../public/stylesheets/rtcaudio.scss';

class Room extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      djUsername: window.location.pathname.split('/')[1]
    }
  }

  createConnetion(){
    const connection = new RTCMultiConnection();
    connection.channel = `full-stack-academy-${this.state.djUsername}`;
    connection.dontCaptureUserMedia = true;
    connection.session = {
      audio: true,
      oneway: true,
      logger:false
    }; 

    //Audio Element
    let streamsContainer = document.getElementById('streams-container');
    connection.onstream = function(e) {
          streamsContainer.appendChild(e.mediaElement);
    };

    return connection;
  }

  componentDidMount(){
     

    this.connection = this.createConnetion()

    // connect to signaling gateway
    this.connection.connect();
    this.connection.join(`full-stack-academy-${this.state.djUsername}`)
     
  }

  render(){
    return (
	    <div>
	      <Youtube />
	      <div id="streams-container"></div>
	    </div>
  	)	
  }
  
};

export default Room;
