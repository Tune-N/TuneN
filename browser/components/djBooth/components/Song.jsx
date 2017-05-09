import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';


function handleClick() {
  console.log('Song Clicked!');
  this.setAttribute('color', "yellow");
  if (!this.is('intersected')) this.addState('focus');
}

function intersected() {
  if (!this.is('intersected')) this.addState('focus');
}

function leave() {
  this.removeState('focus');
}

function render() {
  const color = this.is('focus') ? 'purple' : 'grey';
  this.setAttribute('color', color);
}


const Song = (props) => {
  console.log('Song props', props);
  const { id, name, albumName, artistName, position } = props;
  return (
    <Entity
      click-drag
      primitive="a-plane"
      className="Song selectable "
      width="0.90"
      height="0.15"
      color="blue"
      id={id}
      position={position}
      events={{
        'click': handleClick,
        'raycaster-intersected': intersected,
        'raycaster-intersected-cleared': leave,
        'mouseenter':intersected,
        'stateadded':render,
        'stateremoved':render,
        'mouseleave':leave,
        'dragend': (event)=> {
          const deck1 = document.getElementById('deck1');
          const song1 = document.getElementById('song1');
          console.log('dragend', event);
          console.log('deck1', deck1);
          console.log('deck1 position', deck1.getAttribute('position'));
          console.log('song1 position', song1.getAttribute('position'));
        }
      }}
    >
      {/*Song Name*/}
      <Entity
        primitive="a-text"
        value={name}
        color="black"
        position="-0.40 0.05 0"
        width="0.60"
      />

      {/*/!*Album Name*!/*/}
      {/*<Entity*/}
        {/*primitive="a-text"*/}
        {/*value={albumName}*/}
        {/*color="black"*/}
        {/*position="-0.40 0 0"*/}
        {/*width="0.60"*/}
      {/*/>*/}
    </Entity>


  );
};

export default Song;
