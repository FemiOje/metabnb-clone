import React from 'react';
import Card from '../components/Card';
import { cards } from '../data/data';


const PlaceToStay = () => {
  return (
    <div 
      style={{'marginTop': '3rem'}}
      className='all-cards'
    >

      {cards.map((card)=>{
        return (<Card key={card.id} image={card.image}/>)
      })}

    </div>
  )
}

export default PlaceToStay;