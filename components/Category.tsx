import styled from '@emotion/styled'
import React from 'react'

const CategoryStyle = styled.div`
    color: #333;
    font-size: 0.7rem;
    font-weight: 600;

    border-radius: 4rem;
    border: 1px solid #adb5bd;

    padding: 0.4rem 0.6rem;
    width:fit-content;
`

const Category = ({category}) => {
    return (
        <CategoryStyle>
            {category}
        </CategoryStyle>
    )
}

export default Category
