import React from 'react'
import styled from '@emotion/styled';

const MarkerIcon = styled.div`
    width:2rem;
    height:2rem;
    background:black;
    color:white;
    border-radius: 100%;
    display: flex;
    justify-content:center;
    align-content:center;
    font-weight: 700;
`;


const Marker = ({key, lat, lng, text}) => {
    return (
        <MarkerIcon className="marker">
            {text}
        </MarkerIcon>
    )
}

export default Marker
