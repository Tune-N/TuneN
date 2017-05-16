import React from 'react';

import { withGoogleMap, GoogleMap } from 'react-google-maps';

import mapStyles from '../../../public/stylesheets/mapStyles.json';

// #TODO: remove duplicate rooms_map ids
const RoomsMap = withGoogleMap(() => (
  <GoogleMap
    id="rooms_map"
    defaultZoom={8}
    defaultCenter={{ lat: 40.690218, lng: -74.0962687 }}
    defaultOptions={{ styles: mapStyles }}
  />
));

export default RoomsMap;