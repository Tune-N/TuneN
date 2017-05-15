import axios from 'axios';
import { login } from './auth';

/* ------------       DISPATCHERS     ------------------ */

export const signUp = (username, email, password) => dispatch => {
  console.log(username, email, password)
  return axios.post('/api/users', { username, email, password })
    .then(res => {
      console.log('res.data after axios', res);
      dispatch(login(email, password));
    });
};
