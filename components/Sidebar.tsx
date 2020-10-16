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
    width: 27rem;
    height: 100%;
    padding: 0 1.5rem 0 0;
    background: white;

    overflow:scroll;

    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: -2px -2px 42px -20px rgba(0, 0, 0, 1);
`

const Sidebar = ({isLoaded, itinerary}) => {
    return (
        <SidebarWrapper>
            {isLoaded && itinerary.schedules.map((schedule) => 
                <Card
                    key={schedule.id}
                    date={schedule.date}
                    day={schedule.day}
                    seq={schedule.seq}
                    categories={schedule.place.categories}
                    rating={schedule.place.rating}
                    thumbnail_url={schedule.place.thumbnail_url}
                    name={schedule.place.name}
                ></Card>
            )}
        </SidebarWrapper>
    )
}

export default Sidebar
