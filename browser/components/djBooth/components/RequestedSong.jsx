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
  const color = this.is('focus') ? 'purple' : 'white';
  this.setAttribute('color', color);
}


const RequestedSong = (props) => {
  console.log('Song()', props);
  const { id, position, name, album, artist,  } = props;
  return (
    <Entity
      click-drag
      primitive="a-plane"
      className="Song selectable "
      width="0.90"
      height="0.15"
      color="blue"
      position={position}
      events={{
        'click': handleClick,
        'raycaster-intersected': intersected,
        'raycaster-intersected-cleared': leave,
        'mouseenter':intersected,
        'stateadded':render,
        'stateremoved':render,
        'mouseleave':leave,
      }}
    >
      {/*Song Name*/}
      <Entity
        primitive="a-text"
        value={name}
        color="black"
        position="-0.42 0.04 0"
        width="0.80"
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

export default RequestedSong;
