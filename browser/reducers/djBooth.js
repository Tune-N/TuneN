/* -----------------    ACTIONS     ------------------ */

const SET_DECK1_SONG = 'SET_DECK1_SONG';
const START_PLAYING_DECK1 = 'START_PLAYING_DECK1';
const STOP_PLAYING_DECK1 = 'START_PLAYING_DECK1';
const SET_DECK1_PROGRESS = 'START_PLAYING_DECK1';

const SET_DECK2_SONG = 'SET_DECK2_SONG';
const START_PLAYING_DECK2 = 'START_PLAYING_DECK2';
const STOP_PLAYING_DECK2 = 'START_PLAYING_DECK2';
const SET_DECK2_PROGRESS = 'START_PLAYING_DECK2';


/* ------------   ACTION CREATORS     ------------------ */
const setDeck1Song = song => ({
  type: SET_DECK1_SONG,
  song
});



/* ------------       REDUCER     ------------------ */

const initialState = {
  djName: '',
  deck1: {
    song: {},
    volume: 0,
    progress: 0
  },
  deck2: {
    song: {},
    volume: 0,
    progress: 0
  },
  requestedSongs:[
    {name: 'Song 1', album: 'Album 1', artist:'Artist 1',position:'',rotation:'',color:'white'},
    {name: 'Song 2', album: 'Album 2', artist:'Artist 2',position:'',rotation:'',color:'white'},
    {name: 'Song 3', album: 'Album 3', artist:'Artist 3',position:'',rotation:'',color:'white'},
    {name: 'Song 4', album: 'Album 4', artist:'Artist 4',position:'',rotation:'',color:'white'},
  ],
  crossfader:0,
};


export default function reducer(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_DECK1_SONG:
      const newDeck1 = Object.assign({}, state.deck1);
      newDeck1.song = action.song;
      break;

    default:
      return state;
  }

  return newState;
}


/* ------------       DISPATCHERS     ------------------ */

