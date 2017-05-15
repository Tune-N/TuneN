import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './Homepage/Homepage.jsx'
import Navbar from './components/Navbar';
import djBoothContainer from './components/djBooth/containers/djBoothContainer'

const App = () => (
  <div id="main" className="container-fluid">
    <Route exact path="/" component={Homepage} />
    <Route path="/signup" component={Homepage} />
    <Route path="/login" component={Homepage} />
    <Route path="/room" component={djBoothContainer} />
    <Route path="/dj" component={djBoothContainer} />

  </div>
);

export default App;
