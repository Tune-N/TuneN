
import {
  SET_SELECTED_SONG,
  SET_DECK_SONG,
  ADD_REQUESTED_SONG,
  REMOVE_REQUESTED_SONG,
} from './action-creators';

const song1 ={
  id: {
    videoId: "zix4aMOKwrM",
  },
  snippet: {
    thumbnails: {
      default: {
        height: 90,
        url: "https://i.ytimg.com/vi/YQHsXMglC9A/default.jpg",
        width: 120,
      },
    },
    title: "50 Cent - In Da Club",
  },
}
const song2 = {
  id: {
    videoId: "FHkMT1Vxi5I",
  },
  snippet: {
    thumbnails: {
      default: {
        height: 90,
        url: "https://i.ytimg.com/vi/xvZqHgFz51I/default.jpg",
        width: 120,
      },
    },
    title: "Future - Mask Off",
  },
}
const song3 = {
  id: {
    videoId: "y6y_4_b6RS8",
  },
  snippet: {
    thumbnails: {
      default: {
        height: 90,
        url: "https://i.ytimg.com/vi/xvZqHgFz51I/default.jpg",
        width: 120,
      },
    },
    title: "R Kelly - Ignition",
  },
}

// Initial State
const initialState = {
  djName: '',
  deck1: {
    song: null,
    volume: 0,
    progress: 0,
  },
  deck2: {
    song: null,
    volume: 0,
    progress: 0,
  },
  requestedSongs: [song1, song2, song3],

  selectedSong: null,

  crossfader: 0,
};

// Reducer

export default function reducer(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_SELECTED_SONG:
      newState.selectedSong = action.song;
      break;

    case SET_DECK_SONG:
      const newDeck = Object.assign({}, state[action.deck]);
      newDeck.song = action.song;
      newState[action.deck] = newDeck;
      break;

    case ADD_REQUESTED_SONG:
      const newRequestedSongsList = JSON.parse(JSON.stringify(state.requestedSongs));
      newRequestedSongsList.push(action.song);
      newState.requestedSongs = newRequestedSongsList;
      break;

    case REMOVE_REQUESTED_SONG:
      newState.requestedSongs = state.requestedSongs.filter(
        song => song.id.videoId !== action.songId);
      break;

    default:
      return state;
  }

  return newState;
}
