import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';


const DaydreamController = (props) => {

  return (
    <Entity daydream-controller id="daydreamcontroller" raycaster="objects: .selectable">
      <Entity
        primitive="a-cone"
        color="cyan"
        position="0 0 -2"
        rotation="-90 0 0"
        radius-bottom="0.005"
        radius-top="0.001"
        height="4"
      />
      <Entity
        primitive="a-box"
        id="position-guide"
        position="0 0 -1"
        visible="false"
      />
    </Entity>
  )
};

export default DaydreamController;
