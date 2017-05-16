import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth/reducer').default,
  djs: require('./djs/reducer').default,
  djBooth: require('./djBooth/reducer').default,
});

export default rootReducer;
