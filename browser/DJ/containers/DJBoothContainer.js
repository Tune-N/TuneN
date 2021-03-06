import { connect } from 'react-redux';

import { goLive, endSession, songChange } from '../../reducers/djBooth/action-creators';

import djBooth from '../components/DJBooth.jsx';

const mapStateToProps = state => ({
  username: state.auth.username,
  djBooth: state.djBooth,
});

const mapDispatchToProps = {
  goLive,
  endSession,
  songChange,
};



const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(djBooth);

export default djBoothContainer;
