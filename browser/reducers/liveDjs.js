import axios from 'axios';
import store from '../store';
import { loadLiveDJs } from './djBooth.reducer.js';


export const getLiveDjs = () => {
  axios.get('/api/users/live')
      .then(liveDjs => {
        store.dispatch(loadLiveDJs(liveDjs.data));
      });
};
