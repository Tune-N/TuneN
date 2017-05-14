import { connect } from 'react-redux'

import djBooth from '../components/djBooth.jsx';

const mapStateToProps = state => (state);

const mapDispatchToProps = {};

const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(djBooth);

export default djBoothContainer;
