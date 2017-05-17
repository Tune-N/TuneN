import React from 'react';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import mapStyles from '../../../public/stylesheets/mapStyles.json';

// #TODO: remove duplicate rooms_map ids

const RoomsMap = withGoogleMap((props) => {
  const { liveDJs } = props;
  console.log('RoomsMap', props)
  return (
    <GoogleMap
      id="rooms_map"
      defaultZoom={8}
      defaultCenter={{ lat: 40.690218, lng: -74.0962687 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {liveDJs.map(dj => (
        dj.latitude &&
        <Marker
          position={{
            lat: Number(dj.latitude),
            lng: Number(dj.longitude),
          }}
          key={dj.username}
        />
      ))}
    </GoogleMap>
  );
});

export default RoomsMap;
