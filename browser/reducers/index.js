import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  djBooth: require('./djBooth').default,
  rooms: require('./rooms').default,
  djViewer: require('./djViewer').default
});

export default rootReducer;
