import { connect } from 'react-redux'
import { setDeckSong, removeRequestedSong } from '../../../reducers/djBooth.reducer'

import Deck from '../components/Deck.jsx'


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

const DeckContainer = connect(mapStateToProps, mapDispatchToProps)(Deck);

export default DeckContainer;
