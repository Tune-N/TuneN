import React from 'react';
import { connect } from 'react-redux';
import { login } from '../reducers/auth/actions-creators';

class Login extends React.Component {

  render() {
    return (
      <div className='container-fluid center' style={{ backgroundColor: '#FFFFFF' }}>
        <form className='row' onSubmit={(evt) => {
          evt.preventDefault();
          this.props.login(evt.target.email.value, evt.target.password.value);
          this.props.history.push('/');
        }}>
          <fieldset>
            <div className="center">
              <img style={{ height: '15%', width: '15%' }} src="tuneNLogo.png" />
            </div>
          </fieldset>
          <hr/>
          <fieldset style={{ paddingBottom: 8 }}>
            <input name="email" type="text" className="form-control login-input" placeholder="Enter Email Address" />
          </fieldset>
          <fieldset>
            <input name="password" type="password" className="form-control login-input" placeholder="Enter Password" />
          </fieldset>
          <fieldset className="login-btn ">
            <button className="login btn btn-success" label="login" type="submit" value="Login" >Login</button>
          </fieldset>
          <fieldset className="login-btn">
            <a href='/api/auth/google'><img src="googlebtn.png" /></a>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
