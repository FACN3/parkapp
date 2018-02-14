import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
require('env2')('.env');

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        center={{ lat: 32.6996, lng: 35.3035 }}
      >
        <Marker onClick={this.onMarkerClick} name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>Test</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer);
