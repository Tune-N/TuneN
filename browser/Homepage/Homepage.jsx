import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/Navbar.jsx'
import RoomsList from './components/RoomsList/RoomsList.jsx'
import RoomsMap from './components/RoomsMap.jsx'

import { getLiveDjs } from '../reducers/rooms/rooms.reducer';

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
        <h1>Live DJs</h1>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));