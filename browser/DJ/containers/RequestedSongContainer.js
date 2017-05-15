import { connect } from 'react-redux'
import { selectSong } from '../../reducers/djBooth.reducer'

import RequestedSong from '../components/RequestedSong.jsx'


const mapStateToProps = (state) => ({
  selectedSong: state.djBooth.selectedSong,
});

const mapDispatchToProps = {
    selectSong,
};

const RequestedSongContainer = connect(mapStateToProps, mapDispatchToProps)(RequestedSong);

export default RequestedSongContainer;
