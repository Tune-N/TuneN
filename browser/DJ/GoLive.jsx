import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


import store from '../store';

class GoLive extends React.Component {

  constructor(props) {
    super(props);

    this.djGoesLive = this.djGoesLive.bind(this);
  }


  render() {
    return (
      <div className="row" >
        <h2>do you want to go live?</h2>
        <button type="button" onClick={() => this.djGoesLive()}>Go Live</button>

      </div>
    );
  }
}

const mapState = (state) => ({
  id: state.auth ? state.auth.id : '',
});

export default connect(mapState, null)(GoLive);

<form action="/action_page.php">
  <input type="text" name="firstname" value="Mickey" />
  <input type="text" name="lastname" value="Mouse" />
  <input type="submit" value="Submit" />
</form>

