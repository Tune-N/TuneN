
/* -----------------    ACTIONS     ------------------ */

const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
const JOIN_ROOM = 'JOIN_ROOM';


/* ------------   ACTION CREATORS     ------------------ */
const receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});

const joinRoom = room => ({
  type: JOIN_ROOM,
  room
});


/* ------------       REDUCER     ------------------ */

const initialState = {
  selected: {},
  list: []
};



export default function reducer(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_ROOMS:
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
