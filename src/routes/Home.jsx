import React from 'react';
import '../styles/Home.css';
import HeroImages from '../images/hero-images.png';
import MBToken from '../images/MBToken.svg';
import Metamask from '../images/Metamask.svg';
import OpenSea from '../images/OpenSea.svg';
import NFTsImage from '../images/nfts-image.png';
import Card from '../components/Card.jsx';


const Home = () => {

  const cardData = [
    {
      id: 1,
      image: '../images/card-image-1.png'
    },
    {
      id: 2,
      image: '../images/card-image-2.png'
    },
    {
      id: 3,
      image: '../images/card-image-3.png'
    },
    {
      id: 4,
      image: '../images/card-image-4.png'
    },
    {
      id: 5,
      image: '../images/card-image-5.png'
    },
    {
      id: 6,
      image: '../images/card-image-6.png'
    },
    {
      id: 7,
      image: '../images/card-image-7.png'
    },
    {
      id: 8,
      image: '../images/card-image-8.png'
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
            return <Card key={cardData.id} image={cardData.image}/>
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