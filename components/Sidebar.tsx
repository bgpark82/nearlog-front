import styled from '@emotion/styled'
import React from 'react'
import Card from './Card'

const SidebarWrapper = styled.section`
    position: absolute;
    top:0;
    left: 0;
    bottom:0;
    right:0;

    z-index: 10;
    width: 30rem;
    height: 100vh;
    background: white;

    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: -2px -2px 42px -20px rgba(0, 0, 0, 1);
`

const Sidebar = ({isLoaded, itinerary}) => {
    return (
        <SidebarWrapper>
            {isLoaded && itinerary.schedules.map((schedule) => 
                <Card
                    thumbnail_url={schedule.place.thumbnail_url}
                    name={schedule.place.name}
                ></Card>
            )}
        </SidebarWrapper>
    )
}

export default Sidebar