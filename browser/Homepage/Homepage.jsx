import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/Navbar.jsx'
import RoomsList from './components/RoomsList/RoomsList.jsx'
import RoomsMap from './components/RoomsMap.jsx'

import { getLiveDJs } from '../reducers/djs/action-creators';

class Homepage extends React.Component {

  componentDidMount(){
    this.props.getLiveDJs()
  }

  render() {
    const { djs } = this.props;

    return (
      <div>
        <Navbar />
        <h1>Live DJs</h1>
        <div id="homepage">
          <RoomsMap
            djs={djs}
            containerElement={<div id="rooms_map"/>}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <RoomsList djs={djs}/>
        </div>
      </div>

    )
  }
}


const mapStateToProps = (state) => ({
  djs: state.djs.list
});

const mapDispatchToProps = {
  getLiveDJs,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));