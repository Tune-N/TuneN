import React from 'react';
import Youtube from '../../Youtube' 

class Room extends React.Component {
  constructor(props) {
    super(props) 
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

    this.connection.join('fullstack-academy')
     
  }

  render(){
    return (
	    <div>
	      <h1>Room</h1>
	      <Youtube />
	      <div id="streams-container"></div>
	    </div>
  	)	
  }
  
};

export default Room;
