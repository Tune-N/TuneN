


/* ------------   ACTION CREATORS     ------------------ */
// export const loadSongs = allSongs => ({
//   type: 'LOAD_SONGS',
//   allSongs
// });

export const addNewSong = newSong => ({
  type: 'ADD_SONG',
  newSong
});

// const initialState = {
// songList:{  'Billie Jean':{
//   name:'Billie Jean',
//   position: '0 0 0',
//   rotation: '0 0 0',
//   color: 'white',
// }}
// }

const initialState = {
  songList:[
    {name: 'Song 5', album: 'Album 1', artist:'Artist 1',position:'-3 1 2',rotation:'',color:'white'},
    {name: 'Song 6', album: 'Album 2', artist:'Artist 2',position:'-3 0.5 2',rotation:'',color:'white'},
    {name: 'Song 7', album: 'Album 3', artist:'Artist 3',position:'-3 0 2',rotation:'',color:'white'},
    {name: 'Song 8', album: 'Album 4', artist:'Artist 4',position:'-3 -0.5 2',rotation:'',color:'white'},
  ],
}


/* ------------   REDUCER    ------------------ */
export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    // case 'ADD_SONG':
    //   return Object.assign({},newState,action.newSong)

    case 'LOAD_SONGS':
      return Object.assign(newState, {songList:action.songList})

    case 'SONG_CHANGE':
      return Object.assign(newState, {songList: newState.songList.map(song => {
        if (song.name == action.attributes.name) song = Object.assign(song,action.attributes)
        return song
      })})

    default:
      return state;
  }
}