import React from "react";
import {GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react-17'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    // binding this to event-handler functions

  }
  componentDidMount() {
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    const style = {
      width: '40vw',
      height: '60vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }

    const containerStyle = {
      position: 'relative',  
      width: '100%',
      height: '100%'
    }

    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        containerStyle={ containerStyle }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 28.571934, lng: -81.235870 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={"Fresh Bytes Kitchen"}
          position={{ lat: 28.571934, lng: -81.23587 }}
          name={"Fresh Bytes Kitchen"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <Paper>
            <Typography
              variant = 'h4'
            >
              Fresh Bytes Kitchen
            </Typography>
            <Typography component="p">
              98G Union Park, Fl 19702 <br />
              302-293-8627
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDWCeNY_dm5Zigp44gdpZtYIftFPKrveTo",
})(GoogleMapsContainer);
