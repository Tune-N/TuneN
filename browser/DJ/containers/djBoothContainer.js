import { connect } from 'react-redux';

import { goLive, endSession, setLocation } from '../../reducers/djBooth/action-creators';

import djBooth from '../components/DJBooth.jsx';

const mapStateToProps = state => ({
  user: state.auth,
  djBooth: state.djBooth,
});

const mapDispatchToProps = {
  setLocation,
  goLive,
  endSession,
};

const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(djBooth);

export default djBoothContainer;
