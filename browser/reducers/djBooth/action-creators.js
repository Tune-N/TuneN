import * as firebase from 'firebase';

/* -----------------    ACTIONS     ------------------ */

export const SET_SELECTED_SONG = 'SET_SELECTED_SONG';
export const REMOVE_REQUESTED_SONG = 'REMOVE_REQUESTED_SONG';

export const SET_DECK_SONG = 'SET_DECK_SONG';
export const START_PLAYING = 'START_PLAYING';
export const STOP_PLAYING = 'STOP_PLAYING';
export const SET_DECK_PROGRESS = 'SET_DECK_PROGRESS';
export const SET_LIVE_DJS = 'SET_LIVE_DJS';


/* ------------   ACTION CREATORS     ------------------ */
export const selectSong = song => ({
  type: SET_SELECTED_SONG,
  song,
});

export const setDeckSong = (deck, song) => ({
  type: SET_DECK_SONG,
  deck,
  song,
});

export const removeRequestedSong = (songId) => ({
  type: REMOVE_REQUESTED_SONG,
  songId,
});

/* ------------       DISPATCHERS     ------------------ */

export const goLive = name => () => {
  return firebase.database().ref(`liveDjs/${name}`).set({ name })
    .catch(err => console.log(err));
};

export const endSession = name => () => {
  console.log('endSession Firebase', name);
  return firebase.database().ref(`liveDjs/${name}`).remove()
    .catch(err => console.log(err));
};
