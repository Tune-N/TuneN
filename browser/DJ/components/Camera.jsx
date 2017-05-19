import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const Viewer = () =>(
  <a-entity camera="userHeight: 1.6" wasd-controls-enabled="false" look-controls-enabled="false"></a-entity>
)

const DJ = () =>(
 <Entity primitive="a-camera" mouse-cursor />
)

const Camera = (props) =>(
  props.viewer ? Viewer() : DJ()
)

export default Camera;