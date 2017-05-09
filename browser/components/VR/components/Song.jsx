import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';


function handleClick() {
  console.log('Song Clicked!');
  this.setAttribute('color', "yellow");
  if (!this.is('intersected')) this.addState('focus');
}

function intersected() {
  console.log('mouseenter');
  if (!this.is('intersected')) this.addState('focus');
}

function leave() {
  console.log('mouseleave');
  this.removeState('focus');
}

function render() {
  const color = this.is('focus') ? 'purple' : 'white';
  this.setAttribute('color', color);
}

function onClick() {

}

const Song = (props) => {
  console.log(props);
  return (
    <Entity
      click-drag
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
        'raycaster-intersected-cleared': leave,
        'mouseenter':intersected,
        'stateadded':render,
        'stateremoved':render,
        'mouseleave':leave,
        'dragend': ()=> console.log('dragend')
      }}
    >
      <Entity text={{ value: props.text, color: 'red'}} />
    </Entity>
  );
};

export default Song;
