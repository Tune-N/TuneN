import React from 'react';

export const Login = ({ login }) => (
  <div className='container-fluid'>
    <form className='row' onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.email.value, evt.target.password.value)
    }}>
      <div style={{ paddingTop: 12 }}>
        <input name="email" type="text" placeholder="Enter Email Address" />
        <input style={{ paddingRight: 5 }} name="password" type="password" placeholder="Enter Password" />
        <button className="login" label="login" type="submit" value="Login" >Login</button>
      </div>
    </form>
  </div>
);
