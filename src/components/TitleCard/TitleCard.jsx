import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCard = ({title,category}) => {

  const [apiData,setApiData]=useState([]);
  const cardsref=useRef();

  const options = {
  method: 'GET',
  headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGU2NWJmNjZlYzRkZmU0NzE3M2MyNzVjNmYzZjAwMiIsIm5iZiI6MTc5NTU4OTg3Ny41ODksInN1YiI6IjZiMDY4NmY1ZjVhMjM4N2RiMmNlOWZlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i--6S1FHaMXM6hPmicObrAIeuFeZf8aa3XKKDrxJcc4'}
  };

  const handleWheel=(event)=>{
    event.preventDefault();
    cardsref.current.scrollLeft +=event.deltaY;
  }

  useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsref.current.addEventListener('wheel',handleWheel);
  },[])

  return (
    <div className='title-card'>
       <h2>{title?title:"Popular on Netflix"}</h2>
       <div className="card-list" ref={cardsref}>
        {apiData.map((card,index)=>{
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
       </div>
    </div>
  )
}

export default TitleCard
