import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';

const Booth = () => (
  <div>
    A Frame React Scene:
    <Scene>
      <Entity id="remote" daydream-controller>

      </Entity>


    </Scene>

  </div>
);

export default Booth;