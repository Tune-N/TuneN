import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';


function dragend(event){
  console.log('dragEnd', this);
  if (this.is('hovered')) console.log('Dropped inside Deck 1');

}

const Deck = (props) => {
    console.log('Deck()', props);
    return (
      <Entity
        className="selectable"
        id={props.id}
        primitive="a-plane"
        material={{
          color: 'white',
          opacity: 0.70,
          wireframe: true
        }}
        position={props.position}
        width="1.50"
        height="0.50"
        events={{
          dragend: dragend,
          click: () => {console.log('Click!')}
        }}
      >
        { props.songName ?
          <Entity
            primitive="a-text"
            value={props.songName}
            width="1.00"
            align="center"
          /> : <div></div>
        }
      </Entity>
    )
};


export default Deck;