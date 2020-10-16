import styled from '@emotion/styled'
import React from 'react'
import { category } from '../utils/category'
import Category from './Category'
import { IoIosStar } from "react-icons/io";
import Star from './Star';



const CardWrapper = styled.div`

    background:white;
    display:flex;
    padding: 1rem 1rem;
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
    color: #999;
    font-size: 0.9rem;
    font-weight:100;
`

const Categories = styled.div`
    display: flex;
    justify-content: flex-end;


    div + div {
        margin-left: 0.1rem;
    }
`

const Rating = styled.div`
    display: flex;
    align-content: center;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
    div + div {
        margin-left: 0.21rem;

    }
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
                <section>
                    <Rating>
                        <Star/>
                        <div>{Math.floor(rating * 1000) / 100}</div>
                    </Rating>
                    <Categories>
                    {categories && categories.map(c=>
                        <Category key={c} category={category[c]}/>
                    )}
                    </Categories>

                </section>
                
            </Content>
        </CardWrapper>
    )
}

export default Card
