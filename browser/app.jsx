import React from 'react';
import { Route, } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SignUpContainer from './components/SignupContainer.jsx'
import Homepage from './Homepage/Homepage.jsx';
import Room from './Room/Room.jsx'
import djBoothContainer from './DJ/containers/djBoothContainer';

const App = () => (
  <MuiThemeProvider>
      <div id="main" className="container-fluid">
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/login" component={Homepage} />
        <Route path="/dj" component={djBoothContainer} />
        <Route path="/:djName/live" component={Room} />
      </div>
  </MuiThemeProvider>

);

export default App;
