import axios from 'axios'

// Actions
export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
export const REMOVE_LOGGED_IN_USER = 'REMOVE_LOGGED_IN_USER';



// Action Creators
export const setLoggedInUser = user => ({
  type: SET_LOGGED_IN_USER,
  user
});

export const removeLoggedInUser = () => ({
  type: REMOVE_LOGGED_IN_USER,
});


// Dispatchers
export const signUp = (username, email, password) => dispatch => {
  return axios.post('/api/users', { username, email, password })
    .then(response => {
      dispatch(setLoggedInUser(response.data));
    });
};


export const login = (email, password) => dispatch => {
  return axios.post('/api/auth/login', {email, password})
    .then((response) => dispatch(setLoggedInUser(response.data)))
};


export const getUserInfo = () => dispatch =>{
  return axios.get('/api/auth/me')
    .then(response => {
      dispatch(setLoggedInUser(response.data))
    })
};

export const logout = () => dispatch =>{
  return axios.post('/api/auth/logout')
    .then(() => dispatch(removeLoggedInUser()))
};
