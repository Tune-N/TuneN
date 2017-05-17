import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';


class Deck extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('props inside of djbooth', this.props);
    const { id, selectedSong, setDeckSong, removeRequestedSong } = this.props;
    setDeckSong(id, selectedSong);
    removeRequestedSong(id, selectedSong.id);
  }

  render() {
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
          click: this.onClick
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
