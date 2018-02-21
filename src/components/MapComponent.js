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
    return fetch('/api/allparks')
      .then(results => {
        return results.json();
      })
      .then(data => {
        const ParksData = data.map(park => {
          return park;
        });
        this.setState({ MarkersWithData: ParksData });
      });
    error => {
      this.setState({
        isLoaded: true,
        error
      });
    };
  }
  onMarkerClick = (props, marker, e) => {
    console.log(props);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = props => {
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
        <Navbar location={this.props.location.pathname} />
        <Map
          onClick={this.onMapClicked}
          google={this.props.google}
          initialCenter={{
            lat: 32.6991,
            lng: 35.3035
          }}
        >
          {this.state.MarkersWithData.map(marker => (
            <Marker
              onClick={this.onMarkerClick}
              position={marker.parkCoordinates}
              name={marker.parkName}
              pic={marker.picturesUrl.small}
            />
          ))}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>
                {this.state.selectedPlace.name}
                <img src={this.state.selectedPlace.pic} alt="" />
              </h1>
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
