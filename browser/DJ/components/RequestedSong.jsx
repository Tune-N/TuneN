import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

class RequestedSong extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      focus:false
    };

    //#TODO: Arro binding
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
    const { id, position, name, selectSong, selectedSong, image, songChange, djName } = this.props;
    let color = this.state.focus ? "#999595" : "white";
    if (selectedSong && selectedSong.id === id) color = "yellow";

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
          'click': () => selectSong({id, name}),
          'mouseenter': this.setFocus,
          'raycaster-intersected': this.setFocus,
          'mouseleave':this.removeFocus,
          'raycaster-intersected-cleared': this.removeFocus,
          'componentchanged':function() {
            songChange(
              this.components.position.data,
              this.components.rotation.data,
              this.components.material.data.color,
              name,
            djName)},
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

export default RequestedSong;
