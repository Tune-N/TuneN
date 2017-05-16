import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { getUserInfo } from './reducers/auth/actions-creators';

import Homepage from './Homepage/Homepage.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login';
import Room from './Room/Room.jsx';
import DJBooth from './DJ/containers/DJBoothContainer';

import {cyan700, red500, grey600, fullWhite} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator'
import {spacing} from 'material-ui/styles/spacing'

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

const muiTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: cyan700,
    primary2Color: cyan700,
    primary3Color: grey600,
    accent1Color: '#CC181E',
    accent2Color: '#CC181E',
    accent3Color: '#CC181E',
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
})


class App extends React.Component {

  componentWillMount() {
    this.props.getUserInfo();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
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
