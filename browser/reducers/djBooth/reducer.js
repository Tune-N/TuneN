/* -----------------    ACTIONS     ------------------ */

const SET_SELECTED_SONG = 'SET_SELECTED_SONG';
const REMOVE_REQUESTED_SONG = 'REMOVE_REQUESTED_SONG';

const SET_DECK_SONG = 'SET_DECK_SONG';
const START_PLAYING = 'START_PLAYING';
const STOP_PLAYING = 'STOP_PLAYING';
const SET_DECK_PROGRESS = 'SET_DECK_PROGRESS';
const SET_LIVE_DJS = 'SET_LIVE_DJS';

import { whoami } from '../auth/reducer';

/* ------------   ACTION CREATORS     ------------------ */
export const selectSong = song => ({
  type: SET_SELECTED_SONG,
  song
});

export const setDeckSong = (deck, song) => ({
  type: SET_DECK_SONG,
  deck,
  song,
});

// TODO: remove deck id
export const removeRequestedSong = (deck, songId) => ({
  type: REMOVE_REQUESTED_SONG,
  deck,
  songId,
});



/* ------------       REDUCER     ------------------ */

const song1 ={
  etag: "something",
  id: {
    kind: "youtube#video",
    videoId: "YQHsXMglC9A",
  },
  snippet: {
    channelId: "UComP_epzeKzvBX156r6pm1Q",
    channelTitle: "AdeleVEVO",
    description: "'Hello' is taken from the new album, 25, out November 20. http://adele.com Available now from iTunes http://smarturl.it/itunes25 Available now from Amazon ...",
    liveBroadcastContent: "none",
    publishedAt: "2015-10-23T06:54:18.000Z",
    thumbnails: {
      default: {
        height: 90,
        url: "https://i.ytimg.com/vi/YQHsXMglC9A/default.jpg",
        width: 120,
      },
    },
    title: "Adele - Hello",
  },
}
const song2 = {
  etag: "something",
  id: {
    kind: "youtube#video",
    videoId: "xvZqHgFz51I",
  },
  snippet: {
    channelId: "UCFNosi99Sp0_eLilBiXmmXA",
    channelTitle: "FutureVEVO",
    description: "FUTURE available at: iTunes: http://smarturl.it/FUTURE.iTunes Apple Music: http://smarturl.it/FUTURE.AM Spotify: http://smarturl.it/FUTURE.Sptfy Google Play: ...",
    liveBroadcastContent: "none",
    publishedAt: "2017-05-05T14:00:06.000Z",
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


// Initial State
const initialState = {
  djName: '',
  deck1: {
    song: null,
    volume: 0,
    progress: 0
  },
  deck2: {
    song: null,
    volume: 0,
    progress: 0
  },
  requestedSongs: [song1, song2],

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

    case REMOVE_REQUESTED_SONG:
      newState.requestedSongs = state.requestedSongs.filter(
        song => song.id.videoId !== action.songId);
      break;


    default:
      return state;
  }

  return newState;
}


/* ------------       DISPATCHERS     ------------------ */

export const djGoesLive = () => dispatch => {
  axios.put(`/api/users/${this.props.id}`, { isLive: true })
    .then(res => {
      dispatch(whoami());
    });
};
