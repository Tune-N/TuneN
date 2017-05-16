import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { login, logout } from '../reducers/auth/actions-creators'


/* -----------------    COMPONENT     ------------------ */

//#TODO: Move to MaterialUI Clenaup all the junk @Ben
class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">TuneN</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {/*@Ben update ternaries to && */}
              { this.props.loggedIn && <li className="active"><Link to="/dj">DJ Now <span className="sr-only">(current)</span></Link></li>}
              <li className="dropdown">
                <Link to="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></Link>

              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right login-container">

              { !this.props.user && <li><Link to="/signup">Signup</Link></li> }
              { this.props.user ?
                <li>
                  <button className="btn btn-default navbar-btn form-inline" onClick={(evt)=>{
                    evt.preventDefault();
                    this.props.logout()
                  }}>Logout</button>
                </li>
                :
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login <span className="caret"></span></a>
                  <div className="dropdown-menu">
                    <form className="navbar-form" onSubmit={(evt)=>{
                      evt.preventDefault();
                      this.props.login(evt.target.email.value,evt.target.password.value)
                    }}>
                      <ul style={{listStyle:'none',padding:0}} >
                        <li style={{paddingBottom: 8 }}>
                          <input name="email" type="text" className="form-control login-input" placeholder="Enter Email Address" />
                        </li>
                        <li>
                          <input name="password" type="password"  className="form-control login-input" placeholder="Enter Password" />
                        </li>

                        <li className="login-btn ">
                          <button className="login btn btn-success" label="login" type="submit" value="Login" >Login</button>
                        </li>

                        <li className="login-btn">
                          <a href='/api/auth/google'><img src="googlebtn.png" /></a>
                        </li>
                      </ul>
                    </form>
                  </div>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => ({
  user: state.auth
});

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);