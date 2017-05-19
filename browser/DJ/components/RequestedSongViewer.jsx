import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

class RequestedSongViewer extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    const { id, position, name} = this.props;

    return (
      <Entity
        click-drag
        id={id}
        primitive="a-plane"
        className="Song selectable "
        width="0.90"
        height="0.15"
        color={color}
        position={position}
        events={{

        }}
      >
        <Entity
          primitive="a-text"
          value={name}
          color="black"
          position="-0.42 0.04 0"
          width="1.2"
        />
      </Entity>
    )
  }
}

export default RequestedSongViewer;
