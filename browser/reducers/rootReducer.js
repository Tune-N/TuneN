import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth/reducer').default,
  liveDJs: require('./liveDJs/reducer').default,
  djBooth: require('./djBooth/reducer').default,
  djViewer:require('./djBooth/viewer.reducer').default
});

export default rootReducer;
