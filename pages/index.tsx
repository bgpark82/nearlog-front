import React,{useEffect, useState} from 'react'
import Map from '../components/Map'
import API from '../lib/api/api';


const index = () => {

    const [center, setCenter] = useState({lat: 37.5789464, lng: 126.97177});
    const [zoom, setZoom] = useState(11);
    const [itinerary, setItinerary] = useState({})

    const fetchSchedules = async () => {
        return await API.get('http://localhost:3065/api/v1/routes')
    }

    const getPolyline = (path, maps) => {
        return new maps.Polyline({
            path,
            geodesic: true,
            strokeColor: "#343a40",
            strokeOpacity: 0,
            icons: [
                {
                    icon: {
                        path: "M 0, -1 0, 1",
                        strokeOpacity: 1,
                        scale:2,
                        strokeWeight: 2,
                    },
                    offset: "1",
                    repeat: "10px"
                }
            ],
        })
    }

    const handleApiLoaded = async(map, maps) => {
        const response = await fetchSchedules();
        setItinerary(response.data);

        let path = []
        response.data.schedules.forEach(schedule => {
            if(schedule.path) {
                path = [...path, ...schedule.path]
            } else {
                const polyline = getPolyline(path,maps)
                polyline.setMap(map);
                path = [];
            }
        })  
    };

    useEffect(() => {
        fetchSchedules();
        
    }, [])

    return (
        <div>
            <Map 
                isMarkerShown={true}
                center={center}
                zoom={zoom}
                handleApiLoaded={handleApiLoaded}
                itinerary={itinerary}
            />
        </div>
    )
}

export default index
