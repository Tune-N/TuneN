import { connect } from 'react-redux';

import DJViewerBooth from '../components/DJViewerBooth.jsx';

const mapStateToProps = state => ({
  djViewer: state.djViewer,
});

const mapDispatchToProps = {
};



const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(DJViewerBooth);

export default djBoothContainer;
