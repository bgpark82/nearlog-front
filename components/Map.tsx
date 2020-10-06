import React, {useState, useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker';
import API from '../lib/api/api'



const Map = () => {

    const fetchPoi = async () => {
        const response = await API.get("/api/v1/public/itinerary/925")
        console.log(response);
        setSchedules(response.data.data.schedules);
    }

    useEffect( () => {
        fetchPoi();
    }, [])

    const [schedules, setSchedules] = useState([]);
    const [center, setCenter] = useState({lat: 59.95, lng: 30.33});
    const [zoom, setZoom] = useState(11);

    return (
        <div  style={{ height: '100vh', width: '100%' }}>
       
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDYGQ2IAJYCExceLWEI4FV2x6s-XpDylGg' }}
            defaultCenter={center}
            defaultZoom={zoom}
        >
            {schedules.map(schedule => (
                <Marker
                    key={schedule.id}
                    lat={schedule.place.location.lat}
                    lng={schedule.place.location.lon}
                    text={schedule.day}
                 ></Marker>
            ))}
            
            
        </GoogleMapReact>
        </div>
    )
}

export default Map
