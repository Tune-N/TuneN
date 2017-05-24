import React from 'react';
import aframe from 'aframe';
import { Scene, Entity } from 'aframe-react';
import store from '../../store'

import socket from '../../socket';

import DeckContainer from '../containers/DeckContainer';

import Camera from './Camera.jsx';
import Background from './Background.jsx';
import RequestedSongsViewer from './RequestedSongsViewer.jsx';
import FaderUp from './FaderUp.jsx';
import FaderDown from './FaderDown.jsx';




class DJViewerBooth extends React.Component {


  componentDidMount(){
    socket.on('songChange',function(song){
      store.dispatch({
        type: 'SONG_CHANGE',
        song
      })
    })


  }



  render() {
    let { deck1 , deck2 , songList } = this.props.djViewer;

    return (
      <div>
        <div className="DJBooth">
          {/*<input id="volume" className="col-xs-2" type="range" min="0" max="1" step="0.01" />
           <button onClick={this.crossFaderUp}>song 1</button>
           <button onClick={this.crossFaderDown}>song 2</button>*/}
          <Scene embedded id="viewer">
            <Camera viewer='true' position={this.props.djViewer.camera.position} rotation={this.props.djViewer.camera.rotation}/>
            <Background />
            <DeckContainer
              id="deck1"
              position="0 2 -2"
              image="http://i.imgur.com/KnoBYrW.png"
              songName={deck1}
            />

            <DeckContainer
              id="deck2"
              position="0 1 -2"
              image="http://i.imgur.com/KnoBYrW.png"
              songName={deck2}
            />
            {/*<RequestedSongs position="2 1.5 -2" rotation="0 -20 0" songs={requestedSongs} />*/}
            <RequestedSongsViewer position="2 1.5 -2" rotation="0 -20 0" songs={songList} />
            <FaderUp id="faderUp" position="-1.3 2 -2" image="http://i.imgur.com/EvBhSmL.png"/>
            <FaderDown id="faderDown" position="-1.3 1 -2" image="http://i.imgur.com/EvBhSmL.png"/>

            <Entity
              primitive="a-image"
              id="floor" src="https://cdn.aframe.io/a-painter/images/floor.jpg"
              crossOrigin="anonymous"
            />

            <Entity
              primitive="a-image"
              id="skymap"
              src="https://cdn.aframe.io/a-painter/images/sky.jpg"
              crossOrigin="anonymous"
            />
            <Entity
              primitive="a-mixin"
              id="bar"
              geometry="primitive: box"
              material="color: rgb(10, 20, 50); shader: flat"
              scale-y-color="from: 10 20 50; to: 210, 220, 250; maxScale: 15"
            />

            <Entity
              audioanalyser-levels-scale="analyserEl: #analyser; max: 50; multiplier: 0.06"
              entity-generator="mixin: bar; num: 128"
              layout="type: circle; radius: 10"
              rotation="0 180 0"
            />

            <Entity
              primitive="a-light"
              type="ambient"
              color="#222"
            />
            <Entity
              primitive="a-light"
              audioanalyser-volume-bind="analyserEl: #analyser; component: light; property: intensity; max: 2.2; multiplier: .01"
              position="1 2 1"
              type="point"
            />
            <Entity
              id="sky"
              geometry="primitive: sphere; radius: 500; phiLength: 360; phiStart: 0; thetaLength: 90"
              material="shader: flat; side: back; height: 2048; src: #skymap; width: 2048"
            />
            <Entity
              id="ground"
              geometry="primitive: circle; radius: 30.5"
              rotation="-90 0 0"
              material="src: #floor"
            />
            <Entity particle-system="preset: snow"></Entity>

          </Scene>
        </div>
      </div>
    );
  }
}


export default DJViewerBooth;
