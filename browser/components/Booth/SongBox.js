import React from 'react';
import 'aframe';
import { Scene, Entity } from 'aframe-react';


export default class extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
    return (

      <Entity primitive="a-plane" color={this.props.boxColor} id="song" position={this.props.position} width={this.props.width} height={this.props.height}>
        <Entity text={{value: this.props.text, color:this.props.textColor}} />
      </Entity>

  )
  }

}

{/*<Entity primitive="a-plane" color='white' id="song" position="0 1 -2" class="selectable"  width="1.50" height="0.5">*/}
{/*<Entity text={{value: 'Song 2', color: 'black'}} />*/}
{/*</Entity>*/}