import styled from '@emotion/styled'
import React from 'react'

const CardWrapper = styled.div`
    width:10rem;
    height: 10rem;
    background:white;
    
    display:flex;
    padding: 2rem;
    margin: 0;

    image{
        width: 5rem;
        height: 5rem;
    }
`

const Card = ({thumbnail_url, name}) => {
    return (
        <CardWrapper>
            <img src={thumbnail_url}/>
            <div>{name}</div>
        </CardWrapper>
    )
}

export default Card
