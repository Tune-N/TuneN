import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';
import daydream from 'aframe-daydream-controller-component'

const Booth = () => (
    <Scene>
      <Entity id="remote" daydream raycaster="objects: .selectable">
      <Entity primitive="a-cone" color="cyan" position="0 0 -2" rotation="-90 0 0" radius-bottom="0.005" radius-top="0.001" height="4"/>
        <Entity primitive='a-box' id="position-guide" position="0 -2 -2"/>
      </Entity>

      <Entity primitive="a-sky" color='#2d2c2c'/>


      <Entity primitive="a-plane">
        <Entity text={{value: 'Text Here', color:'purple', width:'10',height:'10' }} id="song" position="0 2 -2" class="selectable"/>
      </Entity>

      <Entity text={{value: 'Hello, WebVR!'}} />
      <Entity primitive="a-plane">
      </Entity>
      <div><p>ewffwfwefwefw</p></div> //not sure why but the Goggles icon is too high up
      <div><p>ewffwfwefwefw</p></div> //these two divs push it down
    </Scene>
);


export default Booth;