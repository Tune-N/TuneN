import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const Viewer = () =>(
  <a-entity camera="userHeight: 1.6" wasd-controls-enabled="false" look-controls-enabled="false"></a-entity>
)

const DJ = () =>(
 <Entity position="0 0 0"><Entity primitive="a-camera" mouse-cursor /></Entity>
)

const Camera = (props) =>(
  props.viewer ? Viewer() : DJ()
)

export default Camera;