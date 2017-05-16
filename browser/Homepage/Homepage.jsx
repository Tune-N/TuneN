import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Navbar from '../components/Navbar.jsx';
import RoomsList from './components/RoomsList/RoomsList.jsx';
import RoomsMap from './components/RoomsMap.jsx';

import { getLiveDJs } from '../reducers/djs/action-creators';

class Homepage extends React.Component {

  componentDidMount() {
    this.props.getLiveDJs();
  }

  render() {
    const { djs } = this.props;

    return (
      <div>
        <Navbar />
        <span style={{ color: this.props.muiTheme.palette.textColor, fontSize: 30 }}>
          Live DJs
        </span>
        <div id="homepage">
          <RoomsMap
            djs={djs}
            containerElement={<div id="rooms_map" />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <RoomsList djs={djs} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  djs: state.djs.list,
});

const mapDispatchToProps = {
  getLiveDJs,
};

const StyledHome = muiThemeable()(Homepage);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StyledHome));
