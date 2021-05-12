import React from 'react';

function Hero(prop){
    const {photo,title,para,date} = prop;


    return(
        <div className='hero-container'>
            <div className ='img-container'>
                <img src={photo} />
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