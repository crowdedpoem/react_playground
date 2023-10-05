import React, { createContext, useState } from 'react'
import "./Card.css"

function activateOverlay(){
    let overlayDiv = document.getElementsByClassName('overlay')[0]
    console.log(overlayDiv.style.opacity);
    overlayDiv.style.opacity = 1;
    
}

export const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link
}) => {

    return(
        <div className='card-container'> 
            {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className='card-img'/>}
            <h1 className='card-title'>{title}</h1>
            <p className='card-description'>{description}</p>
            <a href={link} className='card-btn'>{buttonText}</a>
            
        </div>
    )
}