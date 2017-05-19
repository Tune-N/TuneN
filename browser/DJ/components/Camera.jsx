import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const Viewer = (coords) =>{
    return <a-entity camera="userHeight: 1.6" wasd-controls-enabled="false" look-controls-enabled="false"
                     position={coords.position || '0 0 0'}
                     rotation={coords.rotation || '0 0 0'}></a-entity>
}

const DJ = () =>(
 <Entity primitive="a-camera" mouse-cursor />
)

const Camera = (props) =>(
  props.viewer ? Viewer(props) : DJ()
)

export default Camera;