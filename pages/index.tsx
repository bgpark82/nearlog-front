import React,{useEffect, useState} from 'react'
import Map from '../components/Map'
import API from '../lib/api/api';


const index = () => {

    const [center, setCenter] = useState({lat: 37.5789464, lng: 126.97177});
    const [zoom, setZoom] = useState(11);
    const [steps, setSteps] = useState([])

    const fetchSteps = async () => {
        const response = await API.get('http://localhost:3065')
        return response.data.map(step => ({
            lng: step.maneuver.location[0],
            lat: step.maneuver.location[1]
        }))
    }

    const handleApiLoaded = async(map, maps) => {
        const path = await fetchSteps();
        setSteps(path)

        new maps.Polyline({
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
            map
        })
    };

    useEffect(() => {
        fetchSteps();
        
    }, [])

    return (
        <div>
            <Map 
                isMarkerShown={true}
                center={center}
                zoom={zoom}
                handleApiLoaded={handleApiLoaded}
                steps={steps}
            />
        </div>
    )
}

export default index
