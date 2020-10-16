import styled from '@emotion/styled'
import React from 'react'
import { category } from '../utils/category'

const CardWrapper = styled.div`

    background:white;
    display:flex;
    padding: 1rem;
    width: 100%;
    border-bottom: 1px solid #eee;

    img{
        border-radius: 5px;
        border: 1px solid #fff;
        box-sizing: border-box;
        min-width: 12rem;
        height: 12rem;
        object-fit:cover;

    }
`

const Content = styled.div`
    padding: 0 1rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Name = styled.div`
    font-weight: 900;
    font-size: 1rem;
    text-align: right;
`

const Dates = styled.div`
    display: flex;
    justify-content:space-between;
    margin-bottom: 1rem;
`

const Categories = styled.div`
    display: inline-flex;
    justify-content: flex-end;
    div + div {
        margin-left: 0.1rem;
    }
`

const Category = styled.div`
    color: #333;
    font-size: 0.7rem;
    font-weight: 600;

    border-radius: 4rem;
    border: 1px solid #adb5bd;

    padding: 0.4rem 0.6rem;
    width:fit-content;
`

const Card = ({thumbnail_url, name, date, day, seq, categories, rating}) => {

    


    return (
        <CardWrapper>
            <img src={thumbnail_url || 'https://media-cdn.sygictraveldata.com/media/poi:21296'}/>
            <Content>
                <section>
                    <Dates>
                        <div>{date}</div>
                        <div>{day}일차</div>
                    </Dates>
                    <Name>{name}</Name>
                </section>
                <Categories>
                    {categories && categories.map(c=>
                        <Category key={c}>{category[c]}</Category>
                    )}
                </Categories>
            </Content>
        </CardWrapper>
    )
}

export default Card
