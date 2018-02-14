import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
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
  apiKey: 'AIzaSyBmuWH_rQlyUpT2rXzoQCjHIUrhjhtwDBM'
})(MapContainer);
