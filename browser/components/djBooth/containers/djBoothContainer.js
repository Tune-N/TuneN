import React, { Component } from 'react';
import aframe from 'aframe';

import djBooth from '../djBooth'

export default class djBoothContainer extends Component {

  componentDidMount(){
    console.log('DJ Booth Mounted.')
  }

  render(){
    console.log("rendering djBooth Container");
    return(
    <div>
      <djBooth name="Samir"/>
    </div>
    )
  }
}
