


/* ------------   ACTION CREATORS     ------------------ */
export const loadSongs = allSongs => ({
  type: 'LOAD_SONGS',
  allSongs
});

export const addNewSong = newSong => ({
  type: 'ADD_SONG',
  newSong
});

const initialState = {
songList:{  'Billie Jean':{
  name:'Billie Jean',
  position: '0 0 0',
  rotation: '0 0 0',
  color: 'white',
}}
}


/* ------------   REDUCER    ------------------ */
export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    // case 'ADD_SONG':
    //   return Object.assign({},newState,action.newSong)

    case 'LOAD_SONGS':
      return Object.assign(newState)

    default:
      return state;
  }
}