import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const Viewer = (coords) =>{
    return <a-entity camera="userHeight: 1.6" wasd-controls-enabled="false" look-controls-enabled="false"
                     position={Object.values(coords.position).join(' ') || '0 0 0'}
                     rotation={Object.values(coords.rotation).join(' ') || '0 0 0'}></a-entity>
}

const DJ = () =>(
 <Entity primitive="a-camera" mouse-cursor />
)

const Camera = (props) =>(
  props.viewer ? Viewer(props) : DJ()
)

export default Camera;