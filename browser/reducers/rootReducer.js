import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth/reducer').default,
  djBooth: require('./djBooth/djBooth.reducer').default,
  rooms: require('./rooms/rooms.reducer').default,
});

export default rootReducer;
