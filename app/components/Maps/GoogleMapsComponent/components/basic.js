import React from 'react';
import { compose, withProps } from 'recompose';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

const Map = compose(
    withProps({
        // generate your API key
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD2ADmmz_xYbxqAsgev8pks88DbQ1t50cM&callback=initMap',
        loadingElement: <div style={{ height: '100%' }} />,
        containerElement: <div className="map" style={{ height: '360px' }} />,
        mapElement: <div style={{ height: '100%' }} />,
    }),
    withScriptjs,
    withGoogleMap,
)(() => (
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 56.009483, lng: 92.8121694 }}
    />
));

const BasicMap = () => (
    <Map />
);

export default BasicMap;
