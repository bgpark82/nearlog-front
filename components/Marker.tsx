import React from 'react'
import styled from '@emotion/styled';

const MarkerIcon = styled.div`
    // icon의 위치를 0,0으로 맞춤
    position:absolute;
    width: 24px;
    height: 24px;
    left: -12px;
    top: -12px;

    // icon의 text를 center
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => 
        props.active ? `#862e9c` : `black`
    };
    color: white;
    border-radius: 100%;
    font-size:1rem;
    text-align: center;
    cursor:pointer;

    // active icon
    /* border: 3px solid #862e9c;
    background: white;
    color: #862e9c;
    font-weight: 500; */

    // active day icon
    /* background: #862e9c;
    color: white;
    font-weight: 100; */
`;



const Marker = ({ lat, lng, text, onClickMarker, schedule, activeDate}) => {
    return (
        <MarkerIcon onClick={() => onClickMarker(schedule)} active={activeDate == schedule.day}>
            <span>
                {text}
            </span>
        </MarkerIcon>
    )
}

export default Marker
