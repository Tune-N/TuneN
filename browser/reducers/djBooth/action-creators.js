import axios from 'axios';
import { updateDJLocation } from '../liveDJs/action-creators';

/* globals firebase */

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

export const removeRequestedSong = (deck, songId) => ({
  type: REMOVE_REQUESTED_SONG,
  songId,
});

/* ------------       DISPATCHERS     ------------------ */

export const goLive = (username, latitude = '', longitude = '') => () => {
  return firebase.database().ref(`liveDJs/${username}`).set({
    username,
    latitude,
    longitude,
  })
    .catch(err => console.log(err));
};

export const endSession = username => () => {
  return firebase.database().ref(`liveDJs/${username}`).remove()
    .catch(err => console.log(err));
};

export const setLocation = (id, location) => (dispatch) => {
  const { lat, lng } = location;
  axios.put(`/api/users/${id}`, {location:`${lat} ${lng}`})
    .then((res) => {
      const user = res.data[0];
      dispatch(updateDJLocation(user.id, user.location));
    });
};
