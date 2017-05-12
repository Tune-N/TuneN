import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import djBoothContainer from './components/djBooth/containers/djBoothContainer'
import djBoothViewerContainer from './components/djBooth/containers/djBoothViewerContainer'

const App = () => (
  <div id="main" className="container-fluid">
    {/*<Navbar />*/}
    {/*<h1>Testing</h1>*/}
    <Route path="/vr" component={djBoothContainer} />
    <Route path="/viewer" component={djBoothViewerContainer} />
  </div>
);

export default App;
