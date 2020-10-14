import React, {useState, useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker';

const Map = ({isMarkerShown, zoom, center, handleApiLoaded, steps}) => {
    console.log(steps);
    return (
        <div  style={{ height: '100vh', width: '100%' }}>
       
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDYGQ2IAJYCExceLWEI4FV2x6s-XpDylGg' }}
            defaultCenter={center}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
            {/* {steps.map((step, index) => 
                <Marker
                    key={index}
                    lat={step.lat}
                    lng={step.lng}
                    text="1"
                ></Marker>
            )} */}

        
        </GoogleMapReact>
        </div>
    )
}

export default Map
