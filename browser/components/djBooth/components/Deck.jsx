import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';


const Deck = (props) => {
  console.log('Rendering Deck', props);
  return (
    <Entity
      className="selectable"
      id={props.id}
      primitive="a-plane"
      material={{
        color: 'white',
        opacity: 0.70,
        wireframe: true
      }}
      position={props.position}
      width="1.50"
      height="0.50"
      events={{
        'raycaster-intersected': (event) => {
          console.log('deck intersected')

        },
        'click': () => console.log('Deck Clicked'),
        'mouseenter': () => {
          console.log('mouseenter');
          const deck1 = document.getElementById('deck1');
          console.log('deck1 hovered state', deck1.is('hovered'))
        }
      }}
    >
      { props.songName ?
        <Entity
          primitive="a-text"
          value={props.songName}
          width="1.00"
          align="center"
        /> : <div></div>
      }
    </Entity>
  )
};

export default Deck;