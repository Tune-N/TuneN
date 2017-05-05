import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';


const Song = (props) => (
  <Entity primitive="a-plane" className="song selectable" id="song" position={props.position}>
    <Entity text={{value: props.text, color:props.textColor}} />
  </Entity>
);

export default Song;