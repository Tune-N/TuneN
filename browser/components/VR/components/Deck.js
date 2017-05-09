import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';


const Deck = (props) => {
  return (
    <Entity
      wireframe
      primitive="a-plane"
      material="color: white"
      position={props.position}
      width="1.75"
      height="0.75"
      events={{
        mouseenter: () => console.log('mouseenter deck'),

      }}
    >
    </Entity>
  )
};

export default Deck;