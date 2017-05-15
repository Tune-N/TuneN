import { connect } from 'react-redux'

import djBooth from '../djBooth.jsx';
import djGoesLive from '../../reducers/djBooth.reducer'

const mapStateToProps = state => (state);

const mapDispatchToProps = {
  djGoesLive,
};

const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(djBooth);

export default djBoothContainer;
