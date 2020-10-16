import React,{useCallback, useEffect, useState} from 'react'
import Map from '../components/Map'
import MapLayout from '../components/MapLayout';
import Sidebar from '../components/Sidebar';
import API from '../lib/api/api';


const index = () => {

    const [center, setCenter] = useState({lat: 37.5789464, lng: 126.97177});
    const [zoom, setZoom] = useState(11);
    const [itinerary, setItinerary] = useState({
        schedules:[]
    })
    const [activeDate, setActiveDate] = useState(-1)
    const [isLoaded, setIsLoaded] = useState(false)

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

    const renderPolyline = (itinerary, map, maps) => {
        let path = []
        itinerary.schedules.forEach(schedule => {
            if(schedule.path) {
                path = [...path, ...schedule.path]
            } else {
                const polyline = getPolyline(path, maps)
                polyline.setMap(map);
                path = [];
            }
        })  
    }



    const onClickMarker = useCallback((schedule) => {
        setActiveDate(schedule.day);
    },[])

    const handleApiLoaded = useCallback(async(map, maps) => {
        renderPolyline(itinerary, map, maps)
    },[itinerary, activeDate]);

    const getSchedules = useCallback(async () => {
        const response = await fetchSchedules();
        setItinerary(response.data);
    },[])

    useEffect(() => {
        getSchedules()
    },[])


    
    useEffect(() => {
        if(itinerary  && itinerary.schedules) {
            setIsLoaded(true)
        }
    },[itinerary, isLoaded])



    return (
        <MapLayout>
            <Sidebar isLoaded={isLoaded} itinerary={itinerary}></Sidebar>
            <Map 
                isLoaded
                center={center}
                zoom={zoom}
                handleApiLoaded={handleApiLoaded}
                itinerary={itinerary}
                onClickMarker={onClickMarker}
                activeDate={activeDate}
            />
        </MapLayout>
    )
}

export default index
