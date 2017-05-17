import { connect } from 'react-redux';

import { goLive, endSession } from '../../reducers/djBooth/action-creators';

import djBooth from '../components/DJBooth.jsx';

const mapStateToProps = state => ({
  username: state.auth,
  djBooth: state.djBooth,
});

const mapDispatchToProps = {
  goLive,
  endSession,
};

const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(djBooth);

export default djBoothContainer;
