import { SET_LOGGED_IN_USER, REMOVE_LOGGED_IN_USER } from './actions-creators'

const reducer = (state=null, action) => {

  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return action.user;

    case REMOVE_LOGGED_IN_USER:
      return null;

    default:
      return state
  }
};


export default reducer
