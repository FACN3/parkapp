import React from 'react';
import InitialMap from './GoogleMapComponent'
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} = require('react-google-maps');

export default class GoogleCon extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      markers:[{
        position:{
          lat: 255.0112183,
          lng:121.52067570000001,
        }
      }]
    }
  }
  render(){
    return(
      <div style={{height:"100px"}}>
        <InitialMap
          containerElement={
            <div style={{height:"100px"}}/>
          }
          mapElement={
            <div style={{height:"100px"}} />
          }
          markers={this.state.markers} />
      </div>
    )
  }
}

