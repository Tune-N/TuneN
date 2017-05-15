import React from 'react';

import { withGoogleMap, GoogleMap, Marker, SearchBox } from "react-google-maps";

// #TODO: remove duplicate rooms_map ids
const RoomsMap = withGoogleMap(props => (

  <GoogleMap id="rooms_map"
    defaultZoom={8}
    defaultCenter={{ lat: 40.690218, lng: -74.0962687 }}
  >
  </GoogleMap>
));

export default RoomsMap;