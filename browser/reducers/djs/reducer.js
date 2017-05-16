import { List, Map } from 'immutable'

import { SET_DJS, ADD_DJ, REMOVE_DJ, SET_CURRENT_DJ} from './action-creators'


const initialState = {
  selected: {},
  list: [],
};

export default function reducer(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_DJS:
      newState.list = action.djs;
      break;

    case ADD_DJ:
      newState.list = action.room;
      break;

    case REMOVE_DJ:
      newState.list = action.room;
      break;

    case SET_CURRENT_DJ:
      newState.list = action.room;
      break;

    default:
      return state;
  }

  return newState;

}
