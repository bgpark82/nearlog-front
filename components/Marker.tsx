import React from 'react'
import styled from '@emotion/styled';

const MarkerIcon = styled.div`
    // icon의 위치를 0,0으로 맞춤
    position:absolute;
    width: 20px;
    height: 20px;
    left: -10px;
    top: -10px;

    // icon의 text를 center
    display: flex;
    justify-content: center;
    align-items: center;

    background:black;
    color:white;
    border-radius: 100%;
    font-size:0.8rem;
    text-align: center;


`;


const Marker = ({ lat, lng, text}) => {
    return (
        <MarkerIcon>
            <span>
                {text}
            </span>
        </MarkerIcon>
    )
}

export default Marker
