import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import { getUserInfo } from './reducers/auth/actions-creators';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Homepage from './Homepage/Homepage.jsx';
import SignUp from './components/Signup.jsx'
import Login from './components/Login'
import Room from './Room/Room.jsx'
import DJBooth from './DJ/containers/djBoothContainer';


class App extends React.Component{

  componentWillMount(){
    this.props.getUserInfo();
  }

  render(){
    return (
      <MuiThemeProvider>
        <div id="main" className="container-fluid">
          <Route exact path="/" component={Homepage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/dj" component={DJBooth} />
          <Route path="/:djName/live" component={Room} />
        </div>
      </MuiThemeProvider>

    );
  }
}


const mapStateToProps = (state) => ({
  user: state.auth,
});

const mapDispatchToProps = {
  getUserInfo,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));