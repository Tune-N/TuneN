import axios from 'axios';
import { updateDJLocation } from '../liveDJs/action-creators';

/* globals firebase */
import socket from '../../socket'

/* -----------------    ACTIONS     ------------------ */

export const SET_SELECTED_SONG = 'SET_SELECTED_SONG';

export const ADD_REQUESTED_SONG = 'ADD_REQUESTED_SONG';
export const REMOVE_REQUESTED_SONG = 'REMOVE_REQUESTED_SONG';

export const SET_DECK_SONG = 'SET_DECK_SONG';
export const START_PLAYING = 'START_PLAYING';
export const STOP_PLAYING = 'STOP_PLAYING';
export const SET_DECK_PROGRESS = 'SET_DECK_PROGRESS';
export const SET_LIVE_DJS = 'SET_LIVE_DJS';
export const SONG_CHANGE = 'SONG_CHANGE'

/* ------------   ACTION CREATORS     ------------------ */

export const songChange = (position,rotation,color,name,dj) =>{
  socket.emit('songChange', position,rotation,color,name,dj)

  return {
    type:'SONG_CHANGE',
    position,rotation,color,name,dj
  }
}

export const selectSong = song => ({
  type: SET_SELECTED_SONG,
  song,
});

export const setDeckSong = (deck, song) => ({
  type: SET_DECK_SONG,
  deck,
  song,
});

export const addRequestedSong = (song) => {
  return {
  type: ADD_REQUESTED_SONG,
  song,
}};

export const removeRequestedSong = (songId,username) => {
  socket.emit('removeSongViewerSide', songId, username)
  return {
  type: REMOVE_REQUESTED_SONG,
  songId,
}};

/* ------------       DISPATCHERS     ------------------ */

