import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Navbar';
import HomePage from './djBooth/components/HomePage.jsx';
import Room from './djBooth/components/Room.jsx';
import djBoothContainer from './djBooth/containers/djBoothContainer';
import SignUpContainer from './djBooth/components/SignUpContainer.jsx';

const Body = () => (
  <div>
    <Navbar />
    <Route exact path='/' component={HomePage} />
    <Route exact path='/room' component={Room} />
    <Route exact path='/signup' component={SignUpContainer} />
  </div>);

export default Body;
