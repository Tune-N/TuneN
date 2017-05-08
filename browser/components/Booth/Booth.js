import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';
import daydream from 'aframe-daydream-controller-component'
import SongContainer from './containers/SongContainer';
import Song from './components/Song'

function handleClick() {
  console.log('Scene Clicked!')
}

export default class extends React.Component {

  render(){
    return (
    <div>
      <Scene>
        <Entity position="0 0 0">
          <Entity primitive="a-camera">

            {/*Cursor for browser controller*/}
            <Entity primitive="a-cursor"
                    position="0 0 -1"
                    geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                    material="color: red; shader: flat">
            </Entity>

            <Entity daydream-controller id="remote" raycaster="objects: .selectable">
              <Entity primitive="a-cone" color="cyan" position="0 0 -2" rotation="-90 0 0" radius-bottom="0.005" radius-top="0.001" height="4"/>
              <Entity primitive='a-box' id="position-guide" position="0 0 -1" visible="false"/>
            </Entity>

          </Entity>
        </Entity>
        <Entity primitive="a-sky" color='#2d2c2c'/>
        <Song id="song1" text="Song 1" textColor="black" position="0 2 -2"/>
        <Song id="song2" text="Song 2" textColor="black" position="0 1 -2"/>
      </Scene>
    </div>

)}
}