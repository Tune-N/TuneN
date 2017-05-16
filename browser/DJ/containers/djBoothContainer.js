import { connect } from 'react-redux'

import djBooth from '../djBooth.jsx';
import {djGoesLive, djLocation} from '../../reducers/djBooth/reducer'

//TODO: rename to CamelCase the file
const mapStateToProps = state => (state);

const mapDispatchToProps = {
  djGoesLive,
  djLocation
};

const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(djBooth);

export default djBoothContainer;
