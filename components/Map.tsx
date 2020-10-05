import React, {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker';

const Map = () => {

    const [center, setCenter] = useState({lat: 59.95, lng: 30.33});
    const [zoom, setZoom] = useState(11);

    return (
        <div  style={{ height: '100vh', width: '100%' }}>
       
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDYGQ2IAJYCExceLWEI4FV2x6s-XpDylGg' }}
            defaultCenter={center}
            defaultZoom={zoom}
        >
            <Marker
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
            ></Marker>
            
        </GoogleMapReact>
        </div>
    )
}

export default Map
