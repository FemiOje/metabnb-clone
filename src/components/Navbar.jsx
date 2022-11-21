import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import MetabnbLogo from '../images/metabnb-logo.png';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen((prevValue) => !prevValue)
    }

    return (
        <>
            <nav>
                <div className="metabnb-logo">
                    <img src={MetabnbLogo} alt="metabnb" />
                </div>

                <div className='navbar-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/place-to-stay'>Place to stay</Link>
                    <Link to='/nfts'>NFTs</Link>
                    <Link to='/community'>Community</Link>
                </div>

                <Link to={'/connect-wallet'} className='connect-wallet'>
                    <button className='connect-wallet-button'>
                        Connect Wallet
                    </button>
                </Link>

                <div className="dropdown">
                    <button
                        className='dropdown-button'
                        onClick={toggleDropdown}
                    >
                        Dropdown
                    </button>
                </div>


            </nav >

            {isDropdownOpen &&
                <div className='dropdown-links'>
                    <Link to='/'>
                        <div
                            className='dropdown-link'
                            onClick={toggleDropdown}
                        >
                            Home
                        </div>
                    </Link>

                    <Link to='/place-to-stay'>
                        <div
                            className='dropdown-link'
                            onClick={toggleDropdown}
                        >
                            Place to stay
                        </div>
                    </Link>

                    <Link to='/nfts'>
                        <div
                            className='dropdown-link'
                            onClick={toggleDropdown}
                        >
                            NFTs
                        </div>
                    </Link>

                    <Link to='/community'>
                        <div
                            className='dropdown-link'
                            onClick={toggleDropdown}
                        >
                            Community
                        </div>
                    </Link>
                </div>

            }
        </>
    )
}

export default Navbar;