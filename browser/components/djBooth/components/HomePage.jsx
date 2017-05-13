import React from 'react';
import axios from 'axios';
import loadLiveDJs from '../../../reducers/djBooth.reducer.js';
import store from '../../../store';


class HomePage  extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    //axios requests to get all live DJs
    axios.get('/api/users/live')
    .then(liveDjs => {
      console.log("we are here");
      console.log(liveDjs);
      store.dispatch(loadLiveDJs(liveDjs));
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 jumbotron" style={{ padding: 5 }}>
          <h2>Map Will Go Here</h2>
        </div>
        <div className="col-md-4 jumbotron" style={{ padding: 5 }}>
          <h2>DJ Rooms that Are Live</h2>
        </div>
      </div>
    );
  }
}

export default HomePage;
