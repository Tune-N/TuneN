import React from 'react';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import mapStyles from '../../../public/stylesheets/mapStyles.json';

// #TODO: remove duplicate rooms_map ids
const RoomsMap = withGoogleMap((props) => {

  console.log('props.djs',props.djs)
console.log('dj',props.djs.filter(dj => dj.isLive))

  return (
    <GoogleMap
      id="rooms_map"
      defaultZoom={8}
      defaultCenter={{lat: 40.690218, lng: -74.0962687}}
      defaultOptions={{styles: mapStyles}}>

      {props.djs.filter(dj => dj.isLive).map(dj => <Marker position={{lat: dj.location.lat, lng: dj.location.lng}}/>)}

    </GoogleMap>
  )
});

export default RoomsMap;


