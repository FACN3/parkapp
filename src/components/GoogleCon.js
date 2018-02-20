import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

class GoogleCon extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      geolocation: { isActive: false, lat: 40.6991, lng: 35.3035 },
      error: null,
      isLoaded: false,
      parks: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:6060/api/allparks')
      .then(res => res.json())
      .then(
        parkList => {
          parkList.forEach(park => {
            park.isMarkerShown = false;
          });
          this.setState({
            isLoaded: true,
            parks: parkList
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  componentWillMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const coords = position.coords;
        this.setState({
          geolocation: {
            isActive: true,
            lat: coords.latitude,
            lng: coords.longitude
          }
        });
      });
    }
  }

  handleMarkerClick = parkId => {
    let localParkList = this.state.parks.slice();
    localParkList.forEach(park => {
      if (park.parkId === parkId) {
        park.isMarkerShown ? (park.isMarkerShown = false) : park.isMarkerShown = true;
      }
    });
    this.setState({ parks: localParkList });
  };

  render() {
    return (
      <div>
        <MapComponent
          parks={this.state.parks}
          geolocation={this.state.geolocation}
          handleMarkerClick={this.handleMarkerClick}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `40rem` }} />}
          containerElement={<div style={{ height: `40rem` }} />}
          mapElement={<div style={{ height: `40rem` }} />}
        />
      </div>
    );
  }
}

const MapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={
      props.geolocation.isActive
        ? { lat: props.geolocation.lat, lng: props.geolocation.lng }
        : { lat: 32.794044, lng: 34.989571 }
    }
  >
    {props.parks.map(park => (
      <Marker
        key={park.parkId}
        position={{
          lat: park.parkCoordinates.lat,
          lng: park.parkCoordinates.lng
        }}
        onClick={() => props.handleMarkerClick(park.parkId)}
      >
        {park.isMarkerShown && (
          <InfoWindow onCloseClick={() => props.handleMarkerClick(park.parkId)}>
            <div>
              <h1>{park.parkName}</h1>
              <h3>{park.parkDesc}</h3>
            </div>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

export default GoogleCon;
