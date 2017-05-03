import { createStore, applyMiddleware } from 'redux';
import dummyReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const store = createStore(
  yourReducer,
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  )
);
