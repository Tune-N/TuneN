import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Booth from './components/VR/Booth';

const App = () => (
  <div id="main" className="container-fluid">
    <Navbar />
    <h1>Testing</h1>
    <Route path="/vr" component={Booth} />
  </div>
);

export default App;
