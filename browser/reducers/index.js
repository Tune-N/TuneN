import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  djBooth: require('./djBooth').default,
  rooms: require('./rooms').default,
});

export default rootReducer;
