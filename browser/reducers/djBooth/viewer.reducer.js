const initialState = {
  djName: '',
  deck1: '',
  deck2: '',
  songList:[
  ],
  camera:{
    position:'0 0 0',
    rotation:'0 0 0'
  }
}

/* ------------   REDUCER    ------------------ */
export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case 'LOAD_STATE':
      return Object.assign(newState, {songList:action.requestedSongs},{deck1:action.deck1.song.name},{deck2:action.deck2.song.name})

    case 'SONG_CHANGE':

      return Object.assign(newState, {songList: newState.songList.map(song => {
        if (song.name == action.name) song = action
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