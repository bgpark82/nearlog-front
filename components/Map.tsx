import React, {useState, useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker';

const Map = ({isMarkerShown, zoom, center, handleApiLoaded}) => {

    return (
        <div  style={{ height: '100vh', width: '100%' }}>
       
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDYGQ2IAJYCExceLWEI4FV2x6s-XpDylGg' }}
            defaultCenter={center}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
            <Marker
                lat={37.568528265476075}
                lng={127.01156616210939}
                text="1"
            ></Marker>
        
        </GoogleMapReact>
        </div>
    )
}

export default Map
