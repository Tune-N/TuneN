import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';

class Deck extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      songId: null,
      songName: this.props.songName || null,
      albumnName: null,
      artistName: null
    }

  }

  render (){
    const { id, position } = this.props;
    console.log('rendering deck');
    return (
      <Entity
        className="selectable"
        id={id}
        primitive="a-plane"
        material={{
          color: 'white',
          opacity: 0.70,
          wireframe: true
        }}
        position={position}
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
        { this.state.song ?
          <Entity
            primitive="a-text"
            value={this.state.songName}
            width="1.00"
            align="center"
          /> : <div></div>
        }
      </Entity>
  )
  }
}



// const Deck = (props) => {
//   return (
//     <Entity
//       className="selectable"
//       id={props.id}
//       primitive="a-plane"
//       material={{
//         color: 'white',
//         opacity: 0.70,
//         wireframe: true
//       }}
//       position={props.position}
//       width="1.50"
//       height="0.50"
//       events={{
//         'raycaster-intersected': (event) => {
//           console.log('deck intersected')
//
//         },
//         'click': () => console.log('Deck Clicked'),
//         'mouseenter': () => {
//           console.log('mouseenter');
//           const deck1 = document.getElementById('deck1');
//           console.log('deck1 hovered state', deck1.is('hovered'))
//         }
//       }}
//     />
//   )
// };

export default Deck;