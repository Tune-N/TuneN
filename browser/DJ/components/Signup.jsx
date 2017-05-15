import React from 'react'

const Signup = props => {
  return (
    <div className="signin-container">
      <div className="buffer local">
        <form onSubmit={props.onSignupSubmit}>
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
          <button style={{ backgroundColor: '#3D69A2' }} type="submit" className="btn btn-block btn-primary">{props.message}</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
