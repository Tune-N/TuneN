import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';


class RequestedSong extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      focus:false
    };

    this.setFocus = this.setFocus.bind(this);
    this.removeFocus = this.removeFocus.bind(this);
  }

  setFocus(){
    this.setState({focus: true});

  }
  removeFocus(){
    this.setState({focus: false});
  }


  render(){
    // console.log('RequestedSong render()', this.props);
    const { id, position, name, album, artist, selectSong } = this.props;
    let color = this.state.focus ? "blue" : "white";
    if (this.props.selectedSong === id) color = "yellow";

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
          'click': () => selectSong(this.props.id),
          'mouseenter': this.setFocus,
          'raycaster-intersected': this.setFocus,
          'mouseleave':this.removeFocus,
          'raycaster-intersected-cleared': this.removeFocus,
        }}
      >
        <Entity
          primitive="a-text"
          value={name}
          color="black"
          position="-0.42 0.04 0"
          width="0.80"
        />
      </Entity>
    )
  }
}

export default RequestedSong;
