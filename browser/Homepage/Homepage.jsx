import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Navbar from '../components/Navbar.jsx';
import RoomsList from './components/RoomsList/RoomsList.jsx';
import RoomsMap from './components/RoomsMap.jsx';

import { getLiveDJs } from '../reducers/liveDJs/action-creators';

class Homepage extends React.Component {

  componentDidMount() {
    this.props.getLiveDJs();
  }

  render() {
    const { liveDJs } = this.props;
    return (
      <div>
        <Navbar />
        <span style={{ color: this.props.muiTheme.palette.textColor, fontSize: 30 }}>
          Live DJs
        </span>
        <div id="homepage">
          <RoomsMap
            liveDJs={liveDJs}
            containerElement={<div id="rooms_map" />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <RoomsList liveDJs={liveDJs} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  liveDJs: state.liveDJs.list,
});

const mapDispatchToProps = {
  getLiveDJs,
};

const StyledHome = muiThemeable()(Homepage);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StyledHome));
