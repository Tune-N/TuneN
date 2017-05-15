import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/NavbarMaterial.jsx'
import RoomsList from './components/RoomsList/RoomsList.jsx'
import RoomsMap from './components/RoomsMap.jsx'

import { getLiveDjs } from '../reducers/liveDjs';

class Homepage extends React.Component {

  componentDidMount(){
    console.log('ComponentDidMount');
    this.props.getLiveDjs()
  }

  render() {
    console.log('Homepage', this.props);
    const { djs } = this.props;

    return (
      <div>
        <Navbar />
        <h1>Live DJs</h1>
        <div id="homepage">
          <RoomsMap
            id="rooms_map"
            containerElement={<div id="rooms_map"/>}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <RoomsList djs={djs} />
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