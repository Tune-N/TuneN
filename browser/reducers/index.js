import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth.reducer').default,
  djBooth: require('./djBooth.reducer').default,
  rooms: require('./rooms.reducer').default,
});

export default rootReducer;
