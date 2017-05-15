import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import HomePage from './HomePageBen.jsx';
import Room from '../DJ/components/Room.jsx';
import djBoothContainer from '../DJ/containers/djBoothContainer';
import SignUpContainer from '../components/SignupContainer.jsx';

const Body = () => (
  <div>
    <Navbar />
    <Route exact path='/' component={HomePage} />
    <Route exact path='/room' component={Room} />
    <Route exact path='/signup' component={SignUpContainer} />
  </div>);

export default Body;
