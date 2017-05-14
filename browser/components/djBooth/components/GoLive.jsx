import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

class GoLive extends React.Component {

  componentDidMount() {
    //axios requests
  }

  render() {
    return (
      <div className="row">
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  djs: state.djBooth.djs,
});

export default withRouter(connect(mapStateToProps, null)(GoLive));
