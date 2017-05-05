import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';


function handleClick() {
  console.log('Song Clicked!');
  if (!this.is('intersected')) this.addState('focus');
}

function intersected(){
  console.log('mouseenter');
  if (!this.is('intersected')) this.addState('focus');
}

function leave(){
  console.log('mouseleave');
  this.removeState('focus')
}

function render(){
  const color = this.is('focus') ? 'purple' : 'white';
  this.setAttribute('color', color)

}

const Song = (props) => {
  return (
  <Entity
    primitive="a-plane"
    className="selectable song"
    width="1.50"
    height="0.50"
    color="white"
    id={props.id}
    position={props.position}
    events={{
      'click': handleClick,
      'raycaster-intersected': intersected,
      'mouseenter':intersected,
      'stateadded':render,
      'stateremoved':render,
      'mouseleave':leave
    }}
  >
    <Entity text={{value: props.text, color:"red"}} />
  </Entity>
)};

export default Song;