import React from 'react';
import '../styles/Home.css';
import HeroImages from '../images/hero-images.png';
import MBToken from '../images/MBToken.svg';
import Metamask from '../images/Metamask.svg';
import OpenSea from '../images/OpenSea.svg';
import NFTsImage from '../images/nfts-image.png';
import Card from '../components/Card.jsx';

import cardImage1 from '../images/card-image-1.png';
import cardImage2 from '../images/card-image-2.png';
import cardImage3 from '../images/card-image-3.png';
import cardImage4 from '../images/card-image-4.png';
import cardImage5 from '../images/card-image-5.png';
import cardImage6 from '../images/card-image-6.png';
import cardImage7 from '../images/card-image-7.png';
import cardImage8 from '../images/card-image-8.png';


const Home = () => {

  const cardData = [
    {
      id: 1,
      image: cardImage1
  },
  {
      id: 2,
      image: cardImage2
  },
  {
      id: 3,
      image: cardImage3
  },
  {
      id: 4,
      image: cardImage4
  },
  {
      id: 5,
      image: cardImage5
  },
  {
      id: 6,
      image: cardImage6
  },
  {
      id: 7,
      image: cardImage7
  },
  {
      id: 8,
      image: cardImage8
  }
  ];
  
  return (
    <>
      <section id='hero'>
        <div className='hero-text'>
          <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>

          <br />

          <p>
            We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
          </p>
        </div>

        <div className="hero-images">
          <img src={HeroImages} alt="hero" />
        </div>
      </section>


      <section id='sponsors'>
        <div className="sponsors-logos">
          <img src={MBToken} alt="MBToken" />
          <img src={Metamask} alt="Metamask" />
          <img src={OpenSea} alt="OpenSea" />
        </div>
      </section>

      <section id='collection'>
        <h1>Inspiration for your next adventure</h1>

        <div className="all-cards">
          {cardData.map((card) => {
            return <Card key={card.id} {...card}/>
          })}
        </div>
      </section>

      <section id="nfts">
        <div className="nfts-text">
          <h1>Metabnb NFTs</h1>
          <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>

          <button className="learn-more">
            Learn more
          </button>
        </div>

        <div className="nfts-image">
          <img src={NFTsImage} alt="nfts" />
        </div>
      </section>
    </>
  )
}

export default Home;