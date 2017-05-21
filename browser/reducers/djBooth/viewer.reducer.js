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
    position:{x:0,y:0,z:0},
    rotation:{x:0,y:0,z:0}
  }
}

/* ------------   REDUCER    ------------------ */
export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case 'LOAD_STATE':
      return Object.assign(newState, {songList:action.requestedSongs},{deck1:action.deck1.song.name},{deck2:action.deck2.song.name})

    case 'SONG_CHANGE':
      console.log('songchange action', action)
      return Object.assign(newState, {songList: newState.songList.map(song => {
        if (song.name == action.song.name) song = action.song
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
      newState.camera.position = Object.values(action.camera.position).join(' ')
      newState.camera.rotation  = Object.values(action.camera.rotation).join(' ')
        return newState

    default:
      return state;
  }
}