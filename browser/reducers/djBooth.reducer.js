/* -----------------    ACTIONS     ------------------ */

const SET_SELECTED_SONG = 'SET_SELECTED_SONG';
const FILTER_SONGS = 'FILTER_SONGS';

const SET_DECK1_SONG = 'SET_DECK1_SONG';
const START_PLAYING_DECK1 = 'START_PLAYING_DECK1';
const STOP_PLAYING_DECK1 = 'START_PLAYING_DECK1';
const SET_DECK1_PROGRESS = 'START_PLAYING_DECK1';

const SET_DECK2_SONG = 'SET_DECK2_SONG';
const START_PLAYING_DECK2 = 'START_PLAYING_DECK2';
const STOP_PLAYING_DECK2 = 'START_PLAYING_DECK2';
const SET_DECK2_PROGRESS = 'START_PLAYING_DECK2';


/* ------------   ACTION CREATORS     ------------------ */
export const selectSong = song => ({
  type: SET_SELECTED_SONG,
  song
});

export const setDeck1Song = song => ({
  type: SET_DECK1_SONG,
  song
});

export const setDeck2Song = song => ({
  type: SET_DECK2_SONG,
  song
});

export const filterSongs = songId => ({
  type: FILTER_SONGS,
  songId,
});

/* ------------       REDUCER     ------------------ */


// Initial State
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
    {id:0, name: 'Song 1', album: 'Album 1', artist:'Artist 1'},
    {id:1, name: 'Song 2', album: 'Album 2', artist:'Artist 2'},
    {id:2, name: 'Song 3', album: 'Album 3', artist:'Artist 3'},
    {id:3, name: 'Song 4', album: 'Album 4', artist:'Artist 4'},
  ],

  selectedSong: null,

  crossfader:0,
};

// Reducer

export default function reducer(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_SELECTED_SONG:
      newState.selectedSong = action.song;
      break;

    case SET_DECK1_SONG:
      newState.deck1 = Object.assign({}, state.deck1);
      newState.deck1.song = action.song;
      break;

    case SET_DECK2_SONG:
      newState.deck2 = Object.assign({}, state.deck2);
      newState.deck2.song = action.song;
      break;

    case FILTER_SONGS:
      const filtSongs = newState.requestedSongs.filter(song => song.id !== action.songId);
      newState.requestedSongs = filtSongs;
      break;

    default:
      return state;
  }

  return newState;
}


/* ------------       DISPATCHERS     ------------------ */

