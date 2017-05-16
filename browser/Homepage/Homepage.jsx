import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/Navbar.jsx'
import RoomsList from './components/RoomsList/RoomsList.jsx'
import RoomsMap from './components/RoomsMap.jsx'
import muiThemeable from 'material-ui/styles/muiThemeable'


import { getLiveDjs } from '../reducers/rooms.reducer';

class Homepage extends React.Component {
  // Look into if there is an equivalent to onEnter otherwise consider Componentupdated
  componentDidMount(){
    this.props.getLiveDjs()
  }

  render() {
    console.log('Homepage', this.props);
    const { djs } = this.props;

    return (
      <div>
        <Navbar />
        <span style={{color: this.props.muiTheme.palette.textColor, fontSize:30}}>
    Live DJs
  </span>
        {/* Consider styling inline*/}
        <div id="homepage">
          <RoomsMap

            id="rooms_map"
            containerElement={<div id="rooms_map"/>}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <RoomsList />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  djs: state.djBooth.djs,
});

const mapDispatchToProps = {
  getLiveDjs,
};

const StyledHome = muiThemeable()(Homepage)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StyledHome));