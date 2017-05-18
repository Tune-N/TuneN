
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



export default socket;

