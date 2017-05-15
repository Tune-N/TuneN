import React from 'react';

import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const Navbar = (props) => {
  return (
    <AppBar
      title="TuneN"
    />
  )

};

export default Navbar;