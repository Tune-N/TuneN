
import store from './store';

import { addRequestedSong } from './reducers/djBooth/action-creators';
import { setDJs } from './reducers/liveDJs/action-creators';

/*  globals io */

const socket = io();

socket.on('liveDJs', (liveDJs) => {
  store.dispatch(setDJs(liveDJs));
});

socket.on('song requested', (song) => {
  store.dispatch(addRequestedSong(song));
});




/*  Viewer socket listeners */

socket.on('removeSong', function (songName) {
  store.dispatch({
    type:'REMOVE_SONG',
    songName
  })
})

socket.on('setDeckSong', function (songDeck) {
  store.dispatch({
    type:'SET_DECKS_SONG',
    songDeck
  })
})

socket.on('cameraChange', function (camera) {
  store.dispatch({
    type:'CAMERA_CHANGE',
    camera
  })
})

socket.on('loadInitialState', function (loadedState) {
  console.log('loading up initial state on viewer', loadedState)
  const {requestedSongs, deck1, deck2} = loadedState
  store.dispatch({
    type:'LOAD_STATE',
    requestedSongs,
    deck1,
    deck2
  })
})

export default socket;

