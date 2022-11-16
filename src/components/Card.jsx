import React from 'react';
import Rating from '../images/rating.svg';
import '../styles/Card.css';


const Card = (props) => {
  return (
    <div className='card'>    
        <img 
          src={props.image} 
          alt="desert-king"
          className='card-image'
        />
        <br />
        <br />
      
      <div className="first-row">
        <small className='title'>Desert King</small>
        <br />
        <small className='price'>1MBT per night</small>
      </div>

      <br />
      <br />
      
      <div className="second-row">
        <small className="distance">2345km away</small>
        <br />
        <small className="duration">available for 2 weeks stay</small>
      </div>

      <br />
      <br />

      <div className='rating'>
        <img src={Rating} alt="rating" />
      </div>
    </div>
  )
}

export default Card;