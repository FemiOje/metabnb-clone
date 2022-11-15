import React from 'react';
import Rating from '../images/rating.svg';
import CardImage from '../images/card-image-1.png';
import '../styles/Card.css';

const Card = () => {
  return (
    <div className='card'>    
        <img 
          src={CardImage} 
          alt="desert-king"
          className='card-image'
        />
        <br />
        <br />
      
      <div className="first-row">
        <span className='title'>Desert King</span>
        <span classname='price'>1MBT per night</span>
      </div>

      <br />
      
      <div className="second-row">
        <span className="distance">2345km away</span>
        <span className="duration">available for 2 weeks stay</span>
      </div>

      <br />
      <br />

      <div className='rating'>
        <img src={Rating} alt="rating" />
      </div>
    </div>
  )
}

export default Card