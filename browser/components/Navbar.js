import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router-dom'
// import Login from './Login'
// import WhoAmI from './WhoAmI'
import store from '../store'

/* -----------------    COMPONENT     ------------------ */

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
            <a className="navbar-brand" href="#">TuneN</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <Link to="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></Link>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Signup</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login <span className="caret"></span></a>
                <form onSubmit={console.log("hello")}>
                  <ul className="dropdown-menu">
                    <li>
                      <input name="email" type="text" placeholder="Enter Email Address" />
                    </li>
                    <li>
                      <input name="password" type="password" placeholder="Enter Password" />
                    </li>
                    <li>
                      <button className="login" label="login" type="submit" value="Login" >Login</button>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Signup</a></li>
                  </ul>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */


// import {login} from 'APP/app/reducers/auth'

const mapStateToProps = (state) => ({
  // loggedIn: state.auth ? true : false
})
const mapDispatchToProps = dispatch => ({
  login
})

export default Navbar;
// export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

//Way to choose what is rendered...
// <li classNameName="active">
//                 {this.props.user ? <WhoAmI /> : <Login user={this.props.user} />}
//               </li>
