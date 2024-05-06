import React from 'react'
import "./card.css"

export const Card = (props) => {
    const {heading,para,img,btnName,btnColor} = props;
  return (
    <main className='testCard'>
        <h2>{heading}</h2>
        <p>{para}</p>
        <img src={img} alt="" />
        <button style={{backgroundColor:btnColor}}>{btnName}</button>
    </main>
  )
}
