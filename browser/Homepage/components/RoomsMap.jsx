import React from 'react';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import mapStyles from '../../../public/stylesheets/mapStyles.json';

// #TODO: remove duplicate rooms_map ids

const RoomsMap = withGoogleMap((props) => {
  console.log('thisDjs',props.djs)
  return (
    <GoogleMap
      id="rooms_map"
      defaultZoom={8}
      defaultCenter={{lat: 40.690218, lng: -74.0962687}}
      defaultOptions={{styles: mapStyles}}>



      {props.djs.filter(dj => dj.isLive).map(dj =>{
console.log('djHere',dj)
        return (<Marker position={{lat: Number(dj.location.split(' ')[0]), lng: Number(dj.location.split(' ')[1])}}
                                                           key={location}/>)})
}
    </GoogleMap>
  )
});

export default RoomsMap;
