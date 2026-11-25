import React, { useEffect, useRef } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCard = ({title,category}) => {
  const cardsref=useRef();

  const handleWheel=(event)=>{
    event.preventDefault();
    cardsref.current.scrollLeft +=event.deltaY;
  }

  useEffect(()=>{
    cardsref.current.addEventListener('wheel',handleWheel);
  },[])

  return (
    <div className='title-card'>
       <h2>{title?title:"Popular on Netflix"}</h2>
       <div className="card-list" ref={cardsref}>
        {cards_data.map((card,index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
       </div>
    </div>
  )
}

export default TitleCard
