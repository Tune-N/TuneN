import React from 'react';
import { connect } from 'react-redux';
import Signup from './Signup.jsx';
import SignedUp from './SignedUp.jsx';
import { signUp } from '../reducers/auth.reducer';

/* -----------------    COMPONENT     ------------------ */

class SignupContainer extends React.Component {

  constructor(props) {
    super(props);
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
  }

  render() {
    return (
      <div>
        {this.props.loggedIn ? <SignedUp /> : <Signup onSignupSubmit={this.onSignupSubmit} message={this.props.message} />}
      </div>
    );
  }

  onSignupSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.props.signUp(username, email, password);
    this.props.history.push('/');
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => ({
  message: 'Sign up',
  loggedIn: state.auth ? true : false,
});

const mapDispatch = {
  signUp,
};


export default connect(mapState, mapDispatch)(SignupContainer);
