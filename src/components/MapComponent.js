import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import Navbar from './Navbar';

export class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick = (googleMapsApiProperties, marker, e) => {
    debugger;
    this.setState({
      selectedPlace: googleMapsApiProperties,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          initialCenter={{
            lat: 32.6991,
            lng: 35.3035
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={
              <div>
                <h2>Nazareth2</h2>
                <p>heloo2</p>
              </div>
            }
            position={{ lat: 32.6991, lng: 35.3035 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={
              <div>
                <h2>Nazareth3</h2>
                <p>heloo3</p>
              </div>
            }
            position={{ lat: 32.6992, lng: 35.3034 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={
              <div>
                <h2>Nazareth1</h2>
                <p>heloo1</p>
              </div>
            }
            position={{ lat: 32.6994, lng: 35.3033 }}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapComponent);
