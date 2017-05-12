import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import djBoothContainer from './components/djBooth/containers/djBoothContainer'

import DJ from './components/djBooth/components/temp.jsx'
import Room from './components/Room/components/Room.jsx'

const App = () => (
  <div id="main" className="container-fluid">
    <Route exact path="/" component={Navbar} />
    <Route path="/vr" component={djBoothContainer} />
    <Route path="/room" component={Room} />
    <Route path="/dj" component={DJ} />
  </div>
);

export default App;
