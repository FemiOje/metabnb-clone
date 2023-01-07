import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import MetabnbLogo from '../images/metabnb-logo.png';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ConnectWallet from '../routes/ConnectWallet';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen((prevValue) => !prevValue)
    }

    return (
        <>
            <nav>
                <div className='navbar-container'>
                    <div className="metabnb-logo-container">
                        <img src={MetabnbLogo} alt="metabnb" className='metabnb-logo' />
                    </div>

                    <div className='navbar-links'>
                        <Link to='/'>Home</Link>
                        <Link to='/place-to-stay'>Place to stay</Link>
                        <Link to='/nfts'>NFTs</Link>
                        <Link to='/community'>Community</Link>
                    </div>

                    <Popup trigger={
                        <Link
                            className='connect-wallet'
                        >
                            <button className='connect-wallet-button'>
                                Connect Wallet
                            </button>
                        </Link>}
                        modal
                        nested
                    >
                        <ConnectWallet />
                    </Popup>


                    <div className="dropdown-button">
                        <img
                            className='dropdown-button'
                            onClick={toggleDropdown}
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADRklEQVR4nO2aT0gUURzHP29nAynxUpArHYrIEK0oST1Z0SXoUlFgniraig79UYiyjqVBKHbRDkFeTCEqDIIOBf25aFIQFBFEeNs6FhXmn/l12My0Zt6MO+M87H1gYX8zv7fz3bff995vHw8sFovFYrH8r6igiauOy14FJ4BNwJL4JBXEN+AFcPVDl7oTpEGgDlhzTDqBkwUIm3dE0fG+WzXr8rQdUHlU9rpwCxhFOJdK0/+mS32MRGXEVByRDCkaEFqBIhR73l5Tdwv60MqsPK3KilQellPRyIyfdVlpqsqKVGXlsS43rU0QNgFMTNAPsPKAFJWkaVPQAJQWrDYacij6P4/TMtKjRkXodaAdqNY11HeAm5/wXvXkbb8sRZu4mOaGDHB6aQoZgebX19Wn6kMCUKxrqO0AR2bGKaEBQISa4R41PCe5EVN3UGpdGETYDzTD37q9SOkS0m7+9UdcmnbBlC8PMHhDDaVdSAuZqWuzdXsR2gFBe3a+mavOIHOAb2wKc9VpHaBNsA7wj00hNgc4rn9sCnPVGaQS9I1n0/pEngObgz0+NEMtW1Tdv26E1fk7T5cQtmczY7F9eYBarxvGOCAzHuzBUROfA0JOLpkxngM1wR4fmkGvG8Ysgxt2KU+bxoldBu0y6B97EfkkmBTGLIOXY64DznrUAcY4oDShOsAYByxPqA4wyQGx1QHKpw4wxgEbE6oDYnPAf18H2A0R6wD/eDbdj+KrAwSGjm/32A8wxQErktoPMMUBK34Ee3DUGOOA5ePx1QEiCewHhF1fy/YtsDrA/hu0+wH+sSlYB1gH+Mee7XQJC90B2hMijsxcUx0h5wjc3SBx7f2H5vZ6qfulMzd1bbZuL0IPAcelTymamGToXpUh42H61+6dehPZEEi5fFVQfL9SSne+UR9LvnH++2IA9sP0mZyEyQncTI1xAWBgrZT9GgJfdA21HbBIeAnUK5dGoGPbiBolfxJLeww1KYocGhFQ8FKXq3eAcFUJ9cClh+XChEPfjrcqp2uXBA8qJJMWGpnkIoBAp65NoMPSj8ulHWgqUN/8oriy9Z06o08LyLPVshvFCfKbHSYflx8W6Kx/rwaSFmOxWCwWi8VsfgIN3Fj4Y6Q4mgAAAABJRU5ErkJggg==" alt='dropdown'
                        />
                    </div>
                </div>

                <div className="dropdown-container">
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

                            <Popup 
                            trigger={
                                <Link>
                                    <div
                                        className='dropdown-link'
                                    >
                                        <button className='connect-wallet-button'>
                                            Connect Wallet
                                        </button>
                                    </div>
                                </Link>}
                                modal
                                nested
                            >
                                <ConnectWallet />
                            </Popup>
                        </div>

                    }
                </div>
            </nav >


        </>
    )
}

export default Navbar;