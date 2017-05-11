import { connect } from 'react-redux'

import djBooth from '../components/djBooth.jsx'

const mapStateToProps = state => (state.djBooth);

const mapDispatchToProps = dispatch => {
  return {
    songChange(position,rotation,color,){
      return {
        type:'SONG_CHANGE',
        action: {}
      }
    }
  }
};

const djBoothContainer = connect(mapStateToProps, mapDispatchToProps)(djBooth);

export default djBoothContainer