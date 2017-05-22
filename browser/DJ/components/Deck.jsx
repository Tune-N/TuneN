import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';


class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onTrackPadMove = this.onTrackPadMove.bind(this);
  }

  onClick() {
    const { id, selectedSong, setDeckSong, removeRequestedSong, playSong } = this.props;
    if(!selectedSong) return
    
    setDeckSong(id, selectedSong);
    removeRequestedSong(selectedSong.id);
    const gainIndex = id === 'deck1' ? 0 : 1;
    playSong(gainIndex, selectedSong.id);
  }

  onTrackPadMove(event) {
    
    const { id, crossfader } = this.props;
    let yaxis = 1 - ((event.detail.axis[1] + 1)/2);
    this.props.crossFader(yaxis);
  }

  render() {
    const { id, position, song = {name:''},image,songName} = this.props;
    console.log('songNAMEE', songName)

    return (
      <Entity
        className="selectable"
        id={id}
        src={image|| 'soundWaves.png'}
        primitive="a-plane"
        material={{
          opacity: 0.70,
          wireframe: false,
        }}
        position={position}
        width="1.50"
        height="0.50"
        events={{
          click: this.onClick,
          axismove: this.onTrackPadMove,
        }}
      >
          <Entity
            primitive="a-text"
            value={songName || song.name}
            width="2.00"
            align="center"
            position=" 0 .3 0"
          />
      </Entity>
    )
  }
}


export default Deck;
