import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'


const mapStyles= {
  width= '80%',
  height: '80%'
};

export class MapContainer extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker
  });

  onClose = props => {
    this.setState({
      activeMarker: null
    });
  };


  render(){
    return (
      <Map google={this.props.google} zoom={10} style={mapStyles}
      initialCenter={{
        lat: 43.6271349,
        lng: 1.357844
      }}
      >
        <Marker onClick={this.onMarkerClick}/>
        <InfoWindow marker={this.state.activeMarker} onClose={this.onClose}>
          <div><h6>{this.state.selectedPlace.name}</h6></div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey=''
})(MapContainer);