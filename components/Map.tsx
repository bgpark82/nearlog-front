import React, {useState, useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker';

const Map = ({isMarkerShown, zoom, center, handleApiLoaded, itinerary}) => {

    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        if(itinerary != {}) {
            setIsLoaded(true)
        }
    },[itinerary])

    return (
        <div  style={{ height: '100vh', width: '100%' }}>
       
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDYGQ2IAJYCExceLWEI4FV2x6s-XpDylGg' }}
            defaultCenter={center}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
            {isLoaded &&  itinerary.schedules.map((schedule, index) => 
                <Marker
                    key={schedule.id}
                    lat={schedule.place.location.lat}
                    lng={schedule.place.location.lon}
                    text={schedule.day}
                ></Marker>
            )}

        
        </GoogleMapReact>
        </div>
    )
}

export default Map
