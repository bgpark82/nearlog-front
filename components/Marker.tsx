import React from 'react'

const Marker = ({lat, lng, text}) => {
    return (
        <div className="marker">
            {text}
        </div>
    )
}

export default Marker
