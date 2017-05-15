


/* ------------   ACTION CREATORS     ------------------ */
// export const loadSongs = allSongs => ({
//   type: 'LOAD_SONGS',
//   allSongs
// });

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
    // {name: '', album: 'Album 1', artist:'Artist 1',position:'-10 1 2',rotation:'',color:'#2d2c2c'},
    // {name: '', album: 'Album 2', artist:'Artist 2',position:'-10 0.5 2',rotation:'',color:'#2d2c2c'},
    // {name: '', album: 'Album 3', artist:'Artist 3',position:'-10 0 2',rotation:'',color:'#2d2c2c'},
    // {name: '', album: 'Album 4', artist:'Artist 4',position:'-10 -0.5 2',rotation:'',color:'#2d2c2c'},
  ],
}
let counter = 0
/* ------------   REDUCER    ------------------ */
export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case 'LOAD_SONGS':
      return Object.assign(newState, {songList:action.songList})

    case 'SONG_CHANGE':
      return Object.assign(newState, {songList: newState.songList.map(song => {
        if (song.name == action.attributes.name) song = Object.assign(song,action.attributes)
        return song
      })})

    case 'REMOVE_SONG':
      newState.songList =  newState.songList.filter(
        song => song.name !== action.songName);
      return newState

    case 'SET_DECKS_SONG':
      counter +=1
      console.log('SET_DECK-running',counter)

      newState[action.songDeck.deck] = action.songDeck.song
      return newState

      // const newDeck = Object.assign({}, state[action.deck]);
      // console.log('action',action)
      // newDeck.song = action.songDeck.song;
      // newState.song = newDeck;
      // return newState

    default:
      return state;
  }
}