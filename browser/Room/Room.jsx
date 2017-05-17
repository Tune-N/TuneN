import React from 'react';
import Youtube from '../components/Youtube';
import RequestedSongsList from '../components/RequestedSongsList';

import '../../public/stylesheets/rtcaudio.scss';

class Room extends React.Component {
  constructor(props) {
    super(props)
  }

  createConnetion(){
    const connection = new RTCMultiConnection();
    connection.channel = 'full-stack-academy-djmarcos';
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
    this.connection.join('fullstack-academy')

  }

  render() {
    return (
	    <div>
        <div>
	        <Youtube />
        </div>
	      <div id="streams-container"></div>
        <div style={{ width: '50%', float: 'right' }}>
          <RequestedSongsList />
        </div>
	    </div>
  	)
  }
};

export default Room;
