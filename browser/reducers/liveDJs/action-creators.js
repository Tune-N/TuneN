import axios from 'axios';
import store from '../../store';


/* globals firebase */

// Actions
export const SET_DJS = 'SET_DJS';
export const ADD_DJ = 'ADD_DJ';
export const REMOVE_DJ = 'REMOVE_DJ';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_CURRENT_DJ = 'SET_CURRENT_DJ'; // This refers to the DJ you are listening to.

// Action Creators
export const setDJs = liveDJs => ({
  type: SET_DJS,
  liveDJs,
});

export const addDJ = dj => ({
  type: ADD_DJ,
  dj,
});

export const removeDJ = dj => ({
  type: REMOVE_DJ,
  dj,
});

export const setCurrentDJ = dj => ({
  type: SET_CURRENT_DJ,
  dj,
});

export const updateDJLocation = (djId, location) => {
  return {
    type: SET_LOCATION,
    djId,
    location,
  };
};



