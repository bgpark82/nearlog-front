import React, {useState, useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker';
import Card from './Card';
import MapLayout from './MapLayout';

const Map = ({ isLoaded, zoom, center, handleApiLoaded, itinerary, onClickMarker, activeDate}) => {

    return (
        <div style={{ height: '100vh', width: '100%', position:"relative" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDYGQ2IAJYCExceLWEI4FV2x6s-XpDylGg' }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                {isLoaded && itinerary.schedules.map((schedule) => 
                    <Marker
                        key={schedule.id}
                        lat={schedule.place.location.lat}
                        lng={schedule.place.location.lon}
                        text={schedule.day}
                        schedule={schedule}
                        onClickMarker={onClickMarker}
                        activeDate={activeDate}
                    ></Marker>
                )}       
            </GoogleMapReact>
        </div>
    )
}

export default Map
