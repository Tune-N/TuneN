import React from 'react';
import { connect } from 'react-redux';
import { login } from '../reducers/auth/actions-creators';
import { Link } from 'react-router-dom';

import '../../public/stylesheets/login.scss';

class Login extends React.Component {

  render() {
    return (
      <div className='container-fluid center login'>
        <form className='row' onSubmit={(evt) => {
          evt.preventDefault();
          this.props.login(evt.target.email.value, evt.target.password.value);
          this.props.history.push('/');
        }}>
          <fieldset style={{ paddingTop: 15 }}>
            <div className="google-btn-container">
              <img style={{ height: '25%', width: '25%' }} src="images/logo_transparent.png" />
            </div>
          </fieldset>
          <hr/>
          <fieldset style={{ paddingBottom: 10 }}>
            <input name="email" type="text" className="form-control login-input" placeholder="Enter Email Address" />
          </fieldset>
          <fieldset style={{ paddingBottom: 10 }}>
            <input name="password" type="password" className="form-control login-input" placeholder="Enter Password" />
          </fieldset>
          <fieldset className="login-btn" style={{ paddingBottom: 10 }}>
            <button className="login btn btn-success" label="login" type="submit" value="Login" >Login</button>
          </fieldset>
          <div className="google-btn-container">
            <a href='/api/auth/google'><img id="google-img" src="googlebtn.png" /></a>
          </div>
          <hr/>
          <div style={{ textAlign: 'center', paddingBottom: 5, marginTop: 0 }}>
            <span style={{ color: '#FFFFFF' }}>OR</span>
          </div>
          <div style={{ paddingBottom: 10, color: '#3D69A2' }}>
            <Link to="/signup"><button className="login btn btn-primary" label="Signup" type="Signup" value="Signup" >Signup Here</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
