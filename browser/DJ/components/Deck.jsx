import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';


class Deck extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(){
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
        primitive="a-plane"
        material={{
          color: 'white',
          opacity: 0.70,
          wireframe: true
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
            width="1.00"
            align="center"
            position=" 0 .3 0"
          />
        }
      </Entity>
    )
  }
}


export default Deck;
