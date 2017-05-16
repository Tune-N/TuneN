import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const Camera = () => {
  return (
    <Entity position="0 0 0">
      <Entity primitive="a-camera" mouse-cursor />
    </Entity>
  )
};

export default Camera;