import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

import './MapPage.css';

export default class MapPage extends Component {
	GettingStartedGoogleMap = withGoogleMap(props => (
		<GoogleMap
			ref={props.onMapLoad}
			defaultZoom={12}
			defaultCenter={{ lat: 50.463882, lng: 30.544922 }}
			onClick={props.onMapClick}
		>
			{props.markers.map((marker, index) => (
			<Marker
				{...marker}
				onRightClick={() => props.onMarkerRightClick(index)}
			/>
			))}
		</GoogleMap>
	))

	render() {
		return (
			<div>
                <this.GettingStartedGoogleMap
					containerElement={
						<div style={{ height: `100%` }} />
					}
					mapElement={
						<div style={{ height: '700px' }} />
					}
					markers={[]}
				/>
            </div>
		);
	}
}
