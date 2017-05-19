import axios from 'axios';
import { updateDJLocation } from '../liveDJs/action-creators';

/* globals firebase */

/* -----------------    ACTIONS     ------------------ */

export const SET_SELECTED_SONG = 'SET_SELECTED_SONG';

export const ADD_REQUESTED_SONG = 'ADD_REQUESTED_SONG';
export const REMOVE_REQUESTED_SONG = 'REMOVE_REQUESTED_SONG';

export const SET_DECK_SONG = 'SET_DECK_SONG';
export const START_PLAYING = 'START_PLAYING';
export const STOP_PLAYING = 'STOP_PLAYING';
export const SET_DECK_PROGRESS = 'SET_DECK_PROGRESS';
export const SET_LIVE_DJS = 'SET_LIVE_DJS';
export const VOTE_SONG_UP = 'VOTE_SONG_UP';


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

export const addRequestedSong = (song) => ({
  type: ADD_REQUESTED_SONG,
  song,
});

export const removeRequestedSong = (songId) => ({
  type: REMOVE_REQUESTED_SONG,
  songId,
});

export const voteSongUp = (songId) => ({
  type: VOTE_SONG_UP,
  songId,
});

/* ------------       DISPATCHERS     ------------------ */

