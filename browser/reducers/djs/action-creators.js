import axios from 'axios'


// Actions
export const SET_DJS = 'SET_DJS';
export const ADD_DJ = 'ADD_DJ';
export const REMOVE_DJ = 'REMOVE_DJ';
export const SET_LOCATION = 'SET_LOCATION'

export const SET_CURRENT_DJ = 'SET_CURRENT_DJ'; // This refers to the DJ you are listening to.


// Action Creators
export const setDJs = djs => ({
  type: SET_DJS,
  djs
});

export const addDJ = dj => ({
  type: ADD_DJ,
  dj
});

export const removeDJ = dj => ({
  type: REMOVE_DJ,
  dj
});

export const setCurentDJ = dj => ({
  type: SET_CURRENT_DJ,
  dj
});

export const setLocation = (location,id) =>{

  return{
  type: SET_LOCATION,
  location: {location,id}
}}


// Dispatchers
export const getLiveDJs = () => dispatch => {
  return axios.get('/api/users/live')
    .then(response => {
      dispatch(setDJs(response.data));
    });
};