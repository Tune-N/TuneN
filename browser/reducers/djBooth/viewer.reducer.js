const initialState = {
  djName: '',
  deck1: {
    song: null,
    name: '',
    progress: 0
  },
  deck2: {
    song: null,
    name: '',
    progress: 0
  },
  songList:[
  ],
  camera:{
    position:'',
    rotation:''
  }
}

/* ------------   REDUCER    ------------------ */
export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case 'LOAD_SONGS':
      return Object.assign(newState, {songList:action.songList})

    case 'SONG_CHANGE':
      return Object.assign(newState, {songList: newState.songList.map(song => {
        if (song.name == action.name) song = Object.assign(song,action)
        return song
      })})

    case 'REMOVE_SONG':
      newState.songList =  newState.songList.filter(
        song => song.name !== action.songName);
      return newState

    case 'SET_DECKS_SONG':

      newState[action.songDeck.deck] = action.songDeck.song
      return newState

    case 'CAMERA_CHANGE':
      Object.assign(newState.camera,action)
      return newState

    default:
      return state;
  }
}