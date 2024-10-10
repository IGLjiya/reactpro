import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const StarRating = ({ rating }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {

        let number = index + 0.5

        return <div key={index}>
            {
                rating >= index + 1 
                ? <FaStar className='icon' /> 
                : rating >= number 
                ? <FaStarHalfAlt className="icon" /> 
                : <AiOutlineStar className='icon' />
            }
        </div>


    })

    return (
        <Warpper>
            <div className="icon-style">
                {
                    ratingStar
                }
            </div>
        </Warpper>
    );
}

const Warpper = styled.section`
    .icon-style{
        display : flex;
        gap : 0.2rem;
        align-item:center;
        justify-content:flex-start
    
    
    .icon{
        font-size:2rem;
        color:orange;
    }
    .empty-icon{
        font-size:2.6rem;
    } 
}
`

export default StarRating;
