import React from 'react';
import { connect } from 'react-redux';

import { signUp } from '../reducers/auth/actions-creators';

import '../../public/stylesheets/login.scss';

class Signup extends React.Component {

  onSignup=(event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.props.signUp(username, email, password);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="signin-container container-fluid center login">
        <div className="buffer local">
          <form className='row' onSubmit={this.onSignup}>
            <fieldset style={{ paddingTop: 15 }}>
              <div className="google-btn-container">
                <img style={{ height: '25%', width: '25%' }} src="images/logo_transparent.png" />
              </div>
            </fieldset>
            <hr />
            <div className="form-group">
              <input
                name="username"
                type="username"
                placeholder= "username"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder= "email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                type="password"
                placeholder= "password"
                className="form-control"
                required
              />
            </div>
            <button
              style={{ backgroundColor: '#3D69A2', marginBottom: 10 }}
              type="submit"
              className="btn btn-block btn-primary">
              Signup
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatch = {
  signUp,
};

export default connect(null, mapDispatch)(Signup);
