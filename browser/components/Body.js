import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Navbar';
import HomePage from './djBooth/components/HomePage.jsx';
import Room from './djBooth/components/Room.jsx';
import djBoothContainer from './djBooth/containers/djBoothContainer'

const Body = () => (
  <div>
    <Navbar />
    <Route exact path='/' component={HomePage} />
    <Route exact path='/room' component={Room} />
  </div>);

export default Body;
