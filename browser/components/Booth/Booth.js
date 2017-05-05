import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';
import daydream from 'aframe-daydream-controller-component'
import Song from './Song'

export default class extends React.Component {

  constructor(){
    super()
  }


  render(){
    return (
    <Scene>
      <Entity id="remote" daydream raycaster="objects: .selectable">
      <Entity primitive="a-cone" color="cyan" position="0 0 -2" rotation="-90 0 0" radius-bottom="0.005" radius-top="0.001" height="4"/>
        <Entity primitive='a-box' id="position-guide" position="0 -2 -2" visible="false"/>
      </Entity>

      <Entity primitive="a-sky" color='#2d2c2c'/>

      <Song text="Howdyy" textColor="black" boxColor="white" position="0 2 -2" width="1.50" height="0.5"/>

      <Song text="Howdyy2" textColor="black" boxColor="white" position="0 1 -2" width="1.50" height="0.5"/>


    </Scene>
)}
}