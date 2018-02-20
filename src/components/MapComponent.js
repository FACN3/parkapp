import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import Navbar from './Navbar';

export class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MarkersWithData: []
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

  render() {
    return (
      <div>
        <Navbar location={this.props.location.pathname} />
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 32.6991,
            lng: 35.3035
          }}
        >
          {this.state.MarkersWithData.map(marker => (
            <Marker position={marker.parkCoordinates} />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapComponent);
