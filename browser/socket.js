
import store from './store';

import { setDJs } from './reducers/liveDJs/action-creators'

/*  globals io */

const socket = io();

socket.on('liveDJs', (liveDJs) => {
  console.log('LiveDJs received', liveDJs);
  store.dispatch(setDJs(liveDJs));
});


export default socket;

