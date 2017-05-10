import React from 'react';
import Song from '../components/RequestedSong'

class SongContainer extends React.Component {
  // constructor(props){
  //   super(props);
  //
  //   this.handleClick = this.handleClick.bind(this);
  //   this.handleIsaac = this.handleIsaac.bind(this);
  // }

  handleClick(){
    console.log('SongContainer Clicked!');
    this.setAttribute('color','purple');
  }

  handleIsaac(){
    console.log('Isaac went on a date');
  }

  render(){
    console.log('SongContainer Render');
    console.log('SongContainer props', this.props);
    const { id, text, textColor, position } = this.props;
    return (
      <Song
        id={id}
        position={position}
        text={text}
        events={{click: this.handleClick}}
      />
    )
  }

}

export default SongContainer;
