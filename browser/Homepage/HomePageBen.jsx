import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getLiveDjs } from '../reducers/liveDjs';

class HomePage extends React.Component {

  componentDidMount() {
    getLiveDjs();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 jumbotron" style={{ padding: 5 }}>
          <h3>DJs in your area...</h3>
          <img style={{ width: '100%' }} src="http://laurabelinfante.com/wp-content/uploads/2014/01/Google-Maps-USA-862x582.png" />
        </div>
        <div className="col-md-4 jumbotron" style={{ padding: 5 }}>
          <ul style={{ listStyle: 'none' }}>
          {
            this.props.djs.length && this.props.djs.map(dj => {
              return <li key={dj.id}><Link to={`room/${dj.username}/client`}>{dj.username}</Link></li>;
            })
          }
          </ul>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  djs: state.djBooth.djs,
});

export default withRouter(connect(mapStateToProps, null)(HomePage));
