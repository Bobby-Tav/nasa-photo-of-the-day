import React from 'react';
import styled from 'styled-components';
// import './hero.css';

const StyledHero = styled.div
`
display:flex;
justify-content: space-evenly;
align-items: center;
max-width: 90%;
background-color:beige ;
margin:0 auto;
padding:3% 0 10% 0;
` 
const StyledImgContainer = styled.div
`
width:60%;
`

const StyledImg = styled.img
`
width:60%;
`

const StyledInfoContainer = styled.div
`
width:30%;
`
const StyledParagraph = styled.p
`
text-align: left;
`


function Hero(prop){
    const {photo,title,para,date} = prop;


    return(
        <div className='hero-container'>
            <div className ='img-container'>
                <img src={photo} alt={title} />
            </div>
            <div className='info-container'>
                <h2>{title}</h2>
                <p>Date: {date}</p>
                <p> {para}</p>
            </div>
        </div>
    )
}
export default Hero;