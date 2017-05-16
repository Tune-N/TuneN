import { whoami } from '../auth/reducer';

import axios from 'axios'

import {setLocation} from '../djs/action-creators'

/* -----------------    ACTIONS     ------------------ */

const SET_SELECTED_SONG = 'SET_SELECTED_SONG';
const REMOVE_REQUESTED_SONG = 'REMOVE_REQUESTED_SONG';

const SET_DECK_SONG = 'SET_DECK_SONG';
const START_PLAYING = 'START_PLAYING';
const STOP_PLAYING = 'STOP_PLAYING';
const SET_DECK_PROGRESS = 'SET_DECK_PROGRESS';
const SET_LIVE_DJS = 'SET_LIVE_DJS';



/* ------------   ACTION CREATORS     ------------------ */
export const selectSong = song => ({
  type: SET_SELECTED_SONG,
  song
});

export const setDeckSong = (deck, song) => ({
  type: SET_DECK_SONG,
  deck,
  song,
});

// TODO: remove deck id
export const removeRequestedSong = (deck, songId) => ({
  type: REMOVE_REQUESTED_SONG,
  deck,
  songId,
});



/* ------------       REDUCER     ------------------ */


// Initial State
const initialState = {
  djName: '',
  deck1: {
    song: null,
    volume: 0,
    progress: 0
  },
  deck2: {
    song: null,
    volume: 0,
    progress: 0
  },
  requestedSongs: [
    { id: 0, name: 'Song 1', album: 'Album 1', artist: 'Artist 1' },
    { id: 1, name: 'Song 2', album: 'Album 2', artist: 'Artist 2' },
    { id: 2, name: 'Song 3', album: 'Album 3', artist: 'Artist 3' },
    { id: 3, name: 'Song 4', album: 'Album 4', artist: 'Artist 4' },
  ],

  selectedSong: null,

  crossfader: 0,
};

// Reducer

export default function reducer(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_SELECTED_SONG:
      newState.selectedSong = action.song;
      break;

    case SET_DECK_SONG:
      const newDeck = Object.assign({}, state[action.deck]);
      newDeck.song = action.song;
      newState[action.deck] = newDeck;
      break;

    case REMOVE_REQUESTED_SONG:
      newState.requestedSongs = state.requestedSongs.filter(
        song => song.id !== action.songId);
      break;


    default:
      return state;
  }

  return newState;
}


/* ------------       DISPATCHERS     ------------------ */

export const djGoesLive = () => dispatch => {
  axios.put(`/api/users/${this.props.id}`, { isLive: true })
    .then(res => {
      dispatch(whoami());
    });
};

export const djLocation = (location,id) => dispatch => {
  console.log('putting location',location)
  const {lat, lng} = location
  axios.put(`/api/users/${id}`, `${lat} ${lng}`)
    .then(res => {
      dispatch(setLocation(res.data.location));
    })
};