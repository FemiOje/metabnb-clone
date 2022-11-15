import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import MetabnbLogo from '../images/metabnb-logo.png';

const Navbar = () => {
    return (
        <nav>

            <div className="metabnb-logo">
                <img src={MetabnbLogo} alt="metabnb" />
            </div>

            <div className='navbar-links'>
                <Link to='/home'>Home</Link>
                <Link to='/place-to-stay'>Place to stay</Link>
                <Link to='/nfts'>NFTs</Link>
                <Link to='/community'>Community</Link>
            </div>

            <Link to={'/connect-wallet'} className='connect-wallet'>
                <button className='connect-wallet-button'>
                    Connect Wallet
                </button>
            </Link>

        </nav >
    )
}

export default Navbar;