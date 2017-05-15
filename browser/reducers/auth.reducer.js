import axios from 'axios'


const AUTHENTICATED = 'AUTHENTICATED';

export const authenticated = user => ({
  type: AUTHENTICATED, user
});

const reducer = (state=null, action) => {
  switch (action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
};

export const login = (email, password) =>
  dispatch =>
    axios.post('/api/auth/login',
      {email, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()));

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()));

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/me')
      .then(response => {
        const user = response.data;
        console.log(user);
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)));

export const signUp = (username, email, password) => dispatch => {
  console.log(username, email, password);
  return axios.post('/api/users', { username, email, password })
    .then(res => {
      console.log('res.data after axios', res);
      dispatch(login(email, password));
    });
};

export default reducer
