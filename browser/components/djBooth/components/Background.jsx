import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const Background = () => {
  return (
    <Entity primitive="a-sky" color="#2d2c2c" />
  )
};

export default Background;