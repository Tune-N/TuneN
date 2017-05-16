import React from 'react';
import { Route, } from 'react-router-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import SignUpContainer from './components/SignupContainer.jsx'
import Homepage from './Homepage/Homepage.jsx';
import Room from './Room/Room.jsx'
import djBoothContainer from './DJ/containers/djBoothContainer';

// TODO: Read about Switch, we might need to put them inside one @Ben
const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div id="main" className="container-fluid" style={{backgroundColor:'#303030',height:''}}>
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/login" component={Homepage} />
        <Route path="/dj" component={djBoothContainer} />
        <Route path="/:djName/live" component={Room} />
      </div>
  </MuiThemeProvider>

);

export default App;
