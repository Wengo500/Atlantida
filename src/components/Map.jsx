import React, { Component } from 'react';
import './styles/map.scss';
import {Map, GoogleApiWrapper} from 'google-maps-react';


export class Maps extends Component {
  
  render() {
 
    return (
    <div className="map">  
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{ lat: 46.497, lng:  30.740497459026943 }} 
      />
    </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAoE91Y7eWmilP3nr3h8i_t4GTWKK6ighU'
})(Maps);