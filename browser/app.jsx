import React from 'react';
import { Route } from 'react-router-dom';
import djBoothViewerContainer from './components/djBooth/containers/djBoothViewerContainer'

import Navbar from './components/Navbar';
import djBoothContainer from './components/djBooth/containers/djBoothContainer'

const App = () => (
  <div id="main" className="container-fluid">
    <Route exact path="/" component={Navbar} />
    <Route path="/vr" component={djBoothContainer} />
    <Route path="/viewer" component={djBoothViewerContainer} />
  </div>
);

export default App;
