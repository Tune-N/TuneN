import store from '../store';
import { loadLiveDJs } from './djBooth.reducer.js';
import axios from 'axios';

export const getLiveDjs = () => {
  axios.get('/api/users/live')
      .then(liveDjs => {
        store.dispatch(loadLiveDJs(liveDjs.data));
      });
};
