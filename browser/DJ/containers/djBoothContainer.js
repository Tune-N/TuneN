import { connect } from 'react-redux'

import djBooth from '../djBooth.jsx';

const mapStateToProps = state => (state);

const mapDispatchToProps = {};

const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(djBooth);

export default djBoothContainer;
