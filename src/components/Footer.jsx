import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import TwitterLogo from '../images/twitter-logo.svg';
import FacebookLogo from '../images/facebook-logo.svg';
import InstagramLogo from '../images/instagram-logo.svg';
import MetabnbWhite from '../images/metabnb-white.svg';

const Footer = () => {
  return (
    <footer>
      <div className="grid-container">

        <div className='footer-brand'>
          <div className="footer-main-logo">
            <img src={MetabnbWhite} alt="metabnb" />
          </div>

          <div className='social-icons-footer'>
            <img src={FacebookLogo} alt="facebook" />
            <img src={InstagramLogo} alt="instagram" />
            <img src={TwitterLogo} alt="twitter" />
          </div>

          <div className="copyright">
            <small> &copy; 2022 Metabnb</small>
          </div>
        </div>

        <div className="community">
          <strong>Community</strong>
          <Link to={'/coming-soon'}><p className='footer-link'>NFTs</p></Link>
          <Link to={'/coming-soon'}><p className='footer-link'>Tokens</p></Link>
          <Link to={'/coming-soon'}><p className='footer-link'>Landlords</p></Link>
          <Link to={'/coming-soon'}><p className='footer-link'>Discord</p></Link>
        </div>

        <div className="places">
          <strong>Places</strong>
          <Link to={'/coming-soon'}><p className='footer-link'>Castle</p></Link>
          <Link to={'/coming-soon'}><p className='footer-link'>Farms</p></Link>
          <Link to={'/coming-soon'}><p className='footer-link'>Beach</p></Link>
          <Link to={'/coming-soon'}><p className='footer-link'>Learn more</p></Link>
        </div>

        <div className="about-us">
          <strong>About Us</strong>
          <Link to={'/coming-soon'}><p className='footer-link'>Road map</p></Link>
          <Link to={'/coming-soon'}><p className='footer-link'>Creators</p></Link>
          <Link to={'/coming-soon'}><p className='footer-link'>Career</p></Link>
          <Link to={'/coming-soon'}><p className='footer-link'>Contact us</p></Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer;