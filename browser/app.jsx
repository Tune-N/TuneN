import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';


import { getUserInfo } from './reducers/auth/actions-creators';

import Homepage from './Homepage/Homepage.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login';
import Room from './Room/Room.jsx';
import DJBooth from './DJ/containers/DJBoothContainer';

injectTapEventPlugin();

const firebaseConfig = {
  apiKey: "AIzaSyD5Y4H52jHBjysqmliladg-6_xmiGUxflQ",
  authDomain: "tunen-87da9.firebaseapp.com",
  databaseURL: "https://tunen-87da9.firebaseio.com",
  projectId: "tunen-87da9",
  storageBucket: "tunen-87da9.appspot.com",
  messagingSenderId: "28139658269",
};

firebase.initializeApp(firebaseConfig);

class App extends React.Component {

  componentWillMount() {
    this.props.getUserInfo();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div id="main" className="container-fluid">
          <Route exact path="/" component={Homepage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dj" component={DJBooth} />
          <Route path="/:djName/live" component={Room} />
        </div>
      </MuiThemeProvider>

    );
  }
}


const mapStateToProps = state => ({
  user: state.auth,
});

const mapDispatchToProps = {
  getUserInfo,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
