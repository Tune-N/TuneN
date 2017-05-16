import React from 'react';
import { connect } from 'react-redux';

import { signUp } from '../reducers/auth/actions-creators';


class Signup extends React.Component {

  onSignup=(event)=>{
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.props.signUp(username, email, password);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onSignup}>
            <div className="form-group">
              <label>username</label>
              <input
                name="username"
                type="username"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                required
              />
            </div>
            <button style={{ backgroundColor: '#3D69A2' }} type="submit" className="btn btn-block btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
};

const mapDispatch = {
  signUp,
};


export default connect(null, mapDispatch)(Signup);





