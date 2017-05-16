import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { AppBar } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import {red500} from 'material-ui/styles/colors';

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
  return (
    <div>
      <AppBar
        title={<span style={styles.title}>TuneN</span>}
        iconElementLeft={<IconButton />}
        iconElementRight={user ?
          <FlatButton
            style={{ color: '#FFFFFF' }}
            label="Signout"
            onClick={() => logout()}
          /> :
          <Link to="/login"><FlatButton label="Login" /></Link>}
        style={{ backgroundColor:red500, color: '#FFFFFF' }}
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
