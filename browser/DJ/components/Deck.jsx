import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';


class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { id, selectedSong, setDeckSong, removeRequestedSong, playSong } = this.props;
    console.log('onClick selectedSong', selectedSong)
    setDeckSong(id, selectedSong);
    removeRequestedSong(selectedSong.id);
    const gainIndex = id === 'deck1' ? 0 : 1;
    console.log('gainIndex', gainIndex)
    playSong(gainIndex, selectedSong.id);
  }


  render() {
    console.log('Deck props', this.props);
    const { id, position, song } = this.props;

    return (
      <Entity
        className="selectable"
        id={id}
        src={'soundWaves.png'}
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
        }}
      >
        {song &&
          <Entity
            primitive="a-text"
            value={song.name}
            width="2.00"
            align="center"
            position=" 0 .3 0"
          />
        }
      </Entity>
    )
  }
}


export default Deck;
