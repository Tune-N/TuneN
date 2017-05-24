import { connect } from 'react-redux';
import { setDeckSong, removeRequestedSong } from '../../reducers/djBooth/action-creators';

import Deck from '../components/Deck.jsx'


const mapStateToProps = (state) => ({
  selectedSong: state.djBooth.selectedSong,
  username: state.auth.username
});

const mapDispatchToProps = {
  setDeckSong,
  removeRequestedSong,

};

const DeckContainer = connect(mapStateToProps, mapDispatchToProps)(Deck);

export default DeckContainer;
