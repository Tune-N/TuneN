import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';


class RequestedSong extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      focus:false
    };

    this.onFocus = this.onFocus.bind(this);
  }

  onFocus(){
    this.setState({focus: !this.state.focus});
  }

  render(){
    // console.log('RequestedSong render()', this.props);
    const { id, position, name, album, artist, selectSong  } = this.props;

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
          'buttondown': () => {
            console.log('buttondown');
            selectSong(this.props.id)},
          'buttonup': () => {
            console.log('buttonup');
            selectSong(this.props.id)},
          'raycaster-intersected': this.onFocus,
          'raycaster-intersected-cleared': this.onFocus,
          'mouseenter':this.onFocus,
          'mouseleave':this.onFocus,
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
