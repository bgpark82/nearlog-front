import React, {useState, useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker';
import Card from './Card';

const Map = ({ zoom, center, handleApiLoaded, itinerary, onClickMarker, activeDate}) => {

    const [isLoaded, setIsLoaded] = useState(false)
    console.log(itinerary)
    useEffect(() => {
        if(itinerary.schedules) {
            setIsLoaded(true)
        }
    },[itinerary, isLoaded])

    return (
        <div style={{ height: '100vh', width: '100%', position:"relative" }}>
        
        {isLoaded && itinerary.schedules.map((schedule) => 
            <Card
                thumbnail_url={schedule.thumbnail_url}
                name={schedule.name}
            ></Card>
        )}

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
