import React,{useEffect, useState} from 'react'
import Map from '../components/Map'


const index = () => {

    const [center, setCenter] = useState({lat: 37.5789464, lng: 126.97177});
    const [zoom, setZoom] = useState(11);

    const handleApiLoaded = (map, maps) => {

        const path = [
            {
                lat: 37.568528265476075,
                lng: 127.01156616210939
            },{
                lat: 37.46831856835604,
                lng: 127.05001831054689
            }
        ]

        const polyPath = new maps.Polyline({
            path,
            geodesic: true,
            strokeColor: "#343a40",
            strokeOpacity: 1.0,
            strokeWeight: 2,
        })

        polyPath.setMap(map)
    };

    return (
        <div>
            <Map 
                isMarkerShown={true}
                center={center}
                zoom={zoom}
                handleApiLoaded={handleApiLoaded}
                />
        </div>
    )
}

export default index
