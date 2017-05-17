import React from 'react';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import mapStyles from '../../../public/stylesheets/mapStyles.json';

// #TODO: remove duplicate rooms_map ids

const RoomsMap = withGoogleMap((props) => {
  const { liveDJs } = props;
  return (
    <GoogleMap
      id="rooms_map"
      defaultZoom={8}
      defaultCenter={{ lat: 40.690218, lng: -74.0962687 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {liveDJs.map(dj => (
        dj.location &&
        <Marker
          position={{
            lat: Number(dj.location.split(' ')[0]),
            lng: Number(dj.location.split(' ')[1])
          }}
          key={dj.username}
        />
      ))}
    </GoogleMap>
  );
});

export default RoomsMap;
