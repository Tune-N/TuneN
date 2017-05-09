import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';


const Deck = (props) => {
  return (
    <Entity
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
    />
  )
};

export default Deck;