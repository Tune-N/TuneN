import React from 'react';
import { Route, Switch } from 'react-router-dom';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Homepage from './Homepage/Homepage.jsx';
import djBoothContainer from './DJ/containers/djBoothContainer';



const App = () => (
  <MuiThemeProvider>
      <div id="main" className="container-fluid">
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={Homepage} />
        <Route path="/login" component={Homepage} />
        <Route path="/room" component={<div>Hello World</div>} />
        <Route path="/dj" component={djBoothContainer} />
      </div>
  </MuiThemeProvider>
);


export default App;
