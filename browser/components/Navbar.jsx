import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { AppBar } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';


import { logout } from '../reducers/auth/actions-creators';

// Title Styles
const styles = {
  title: {
    cursor: 'pointer',
    color: '#FFFFFF',
    paddingRight: 30,
  },
};

const Navbar = props => {
  const { user, logout} = props;

  // const items = {user ? {<Link to="dj"><FlatButton key={1} label="DJ Live"/></Link>
  //   <FlatButton key={2} label="Sign out" onClick={()=>logout()} />}
  //
  // :   {<Link to="/login"><FlatButton key={4} label="Login" /></Link>}

  const Loggedin = () => {
    return (<div>
      <Link to="dj"><FlatButton label="DJ Live"/></Link>
      < FlatButton key={2} label="Sign out" onClick={()=>logout()} />
    </div>)
  }

  const NotLoggedIn = () => (
    <Link to="/login"><FlatButton label="Login" labelStyle={{fontSize:15}}/></Link>
  )

  return (
    <div>
      <AppBar
        title={<span style={styles.title}>TuneN</span>}
        style={{ backgroundColor: '#021019', color: '#FFFFFF', paddingTop:8}}
        iconElementLeft={<IconButton />}
      iconElementRight={ user ? <Loggedin/>: <NotLoggedIn/>}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

{/*<AppBar*/}
  {/*title={<span style={styles.title}>TuneN</span>}*/}
  {/*style={{ backgroundColor: '#021019', color: '#FFFFFF' }}*/}
  {/*iconElementLeft={<IconButton />}*/}
  {/*iconElementRight={<IconMenu*/}
    {/*{...props}*/}
    {/*iconButtonElement={*/}
      {/*<IconButton ><MoreVertIcon style={iconStyles} color={blue500}/></IconButton>*/}
    {/*}*/}
    {/*targetOrigin={{horizontal: 'right', vertical: 'top'}}*/}
    {/*anchorOrigin={{horizontal: 'right', vertical: 'top'}}*/}
  {/*>*/}
    {/*<Link to="/dj"><MenuItem primaryText="DJ Live" /></Link>*/}
    {/*<MenuItem primaryText="Sign out" onClick={()=> logout()}/>*/}

  {/*</IconMenu>}*/}
{/*/>*/}