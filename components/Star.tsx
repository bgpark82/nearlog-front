import styled from '@emotion/styled';
import React from 'react'
import { IoIosStar } from 'react-icons/io';

const StarStyle =styled.div`
    color: #fa5252;
`

const Star = () => {
    return (
        <StarStyle>
            <IoIosStar/>
        </StarStyle>
    )
}

export default Star
