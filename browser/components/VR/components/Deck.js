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

    >
    </Entity>
  )
};

export default Deck;