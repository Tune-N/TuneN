import React from 'react';
import { connect } from 'react-redux';

import Youtube from './components/Youtube';
import RequestedSongsList from './components/RequestedSongsList';

import socket from '../socket';

import '../../public/stylesheets/rtcaudio.scss';

class Room extends React.Component {
  constructor(props) {
    super(props)
  }

  createConnetion(){
    console.log('Room createConnection')
    const connection = new RTCMultiConnection();
    connection.channel = `full-stack-academy-${this.props.dj}`;
    console.log('connection.channel', connection.channel)
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
    console.log('RoomdidMount')
    const { dj } = this.props;
    socket.emit('joined room', dj);

    this.connection = this.createConnetion();

    // connect to signaling gateway
    this.connection.connect();
    console.log('.join', `full-stack-academy-${dj}`)
    this.connection.join(`full-stack-academy-${dj}`)
  }

  componentWillUnmount() {
    console.log('Emitting leave room');
    const { dj } = this.props;
    socket.emit('leave room', dj);
  }

  render() {
    return (
	    <div>
	      <Youtube />
	      <div id="streams-container"></div>
        <div style={{ width: '50%', float: 'right' }}>
          <RequestedSongsList
            requestedSongs={this.props.requestedSongs}
          />
        </div>
	    </div>
  	)
  }
};

const mapStateToProps = state => ({
  dj: state.liveDJs.selected,
  requestedSongs: state.djBooth.requestedSongs,
});

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(Room);
