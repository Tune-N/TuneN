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
}

/* ------------   REDUCER    ------------------ */
export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case 'LOAD_SONGS':
      return Object.assign(newState, {songList:action.songList})

    case 'SONG_CHANGE':
      console.log('receiving on viewerrr')
      return Object.assign(newState, {songList: newState.songList.map(song => {
        if (song.name == action.attributes.name) song = Object.assign(song,action.attributes)
        return song
      })})

    case 'REMOVE_SONG':
      newState.songList =  newState.songList.filter(
        song => song.name !== action.songName);
      return newState

    case 'SET_DECKS_SONG':

      newState[action.songDeck.deck] = action.songDeck.song
      return newState


    default:
      return state;
  }
}