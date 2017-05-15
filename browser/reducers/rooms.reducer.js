import axios from 'axios';


/* -----------------    ACTIONS     ------------------ */

const SET_ROOMS = 'SET_ROOMS';
const JOIN_ROOM = 'JOIN_ROOM';


/* ------------   ACTION CREATORS     ------------------ */
const setRooms = rooms => ({
  type: SET_ROOMS,
  rooms
});

const joinRoom = room => ({
  type: JOIN_ROOM,
  room
});


/* ------------       REDUCER     ------------------ */

const initialState = {
  selected: {},
  list: [],
};



export default function reducer(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_ROOMS:
      newState.list = action.rooms;
      break;

    case JOIN_ROOM:
      newState.selected = action.room;
      break;

    default:
      return state;
  }

  return newState;

}


/* ------------       DISPATCHERS     ------------------ */

export const getLiveDjs = () => dispatch => {
  axios.get('/api/users/live')
    .then(response => {
      dispatch(setRooms(response.data));
    });
};