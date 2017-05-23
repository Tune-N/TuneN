import React from 'react';
import { connect } from 'react-redux';

import Youtube from './components/Youtube';
import RequestedSongsList from './components/RequestedSongsList';
import DJViewerBoothContainer from '../DJ/containers/DJBoothViewerContainer'

import socket from '../socket';

import '../../public/stylesheets/rtcaudio.scss';

class Room extends React.Component {
  constructor(props) {
    super(props)
  }

  createConnetion(){
    const connection = new RTCMultiConnection();
    connection.channel = `full-stack-academy-${this.props.dj}`;
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
    const { dj } = this.props;
    socket.emit('joined room', dj);

    this.connection = this.createConnetion();

    // connect to signaling gateway
    this.connection.connect();
    this.connection.join(`full-stack-academy-${dj}`)
  }

  componentWillUnmount() {
    const { dj } = this.props;
    socket.emit('leave room', dj);
  }

  render() {
    return (
	    <div>
        <DJViewerBoothContainer/>
	      <Youtube  style={{float:'right'}}/>
	      <div id="streams-container"></div>
        <div style={{ width: '40%', float: 'right' }}>
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
