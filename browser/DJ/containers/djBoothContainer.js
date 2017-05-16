import { connect } from 'react-redux'

import djBooth from '../djBooth.jsx';

import { goLive } from '../../reducers/djBooth/reducer';


const mapStateToProps = state => (state);

const mapDispatchToProps = {
  goLive,
};

const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(djBooth);

export default djBoothContainer;
