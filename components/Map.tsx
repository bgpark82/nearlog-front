import React, {useState, useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker';
import API from '../lib/api/api'
import Axios from 'axios';

const Map = () => {

    
    const [schedules, setSchedules] = useState([]);
    const [center, setCenter] = useState({lat: 37.5789464, lng: 126.97177});
    const [zoom, setZoom] = useState(11);
    const [steps, setSteps] = useState([])


    const handleApiLoaded = (map, maps) => {

        const path = schedules.map(schedule => ({
            lat:schedule.place.location.lat,
            lng:schedule.place.location.lon,
        }));


        const polyPath = new maps.Polyline({
            path,
            geodesic: true,
            strokeColor: "#343a40",
            strokeOpacity: 1.0,
            strokeWeight: 2,
        })

        polyPath.setMap(map)
    };

    const getPath = (schedules) => {
        return schedules.map(schedule => ({
            lat:schedule.place.location.lat,
            lng:schedule.place.location.lon,
        }));
    }


    const fetchPoi = async () => {
        const response = await API.get("/api/v1/public/itinerary/925")
        setSchedules(response.data.data.schedules);
        fetchRoute(response.data.data.schedules);
    }

    const fetchRoute = async (schedules) => {

        const path = getPath(schedules);
        console.log(path);
        for(let i = 0; i < path.length; i++) {
            const start = path[i];
            const end = path[i+1];
            if(start && end) {
                const result = await Axios.post('http://localhost:3065/',{start, end})
                setSteps([...steps, result.data])
            }
        }
    }

    useEffect( () => {
        fetchPoi();
    }, [])

    useEffect(() => {
        console.log(steps);
    },[steps])


    return (
        <div  style={{ height: '100vh', width: '100%' }}>
       
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDYGQ2IAJYCExceLWEI4FV2x6s-XpDylGg' }}
            defaultCenter={center}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
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
