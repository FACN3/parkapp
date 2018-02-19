import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import Navbar from './Navbar';

export class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MarkersWithData: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  componentDidMount() {
    return fetch('http://localhost:6060/api/allparks')
      .then(results => {
        return results.json();
      })
      .then(data => {
        const ParksData = data.map(park => {
          return park;
        });
        this.setState({ MarkersWithData: ParksData }, () => {
          console.log(this.state);
        });
      });
  }

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
          {this.state.MarkersWithData.map(marker => (
            <Marker position={marker.parkCoordinates} />
          ))}

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
