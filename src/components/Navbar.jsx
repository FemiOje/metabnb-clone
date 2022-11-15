import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/place-to-stay'>Place to stay</Link>
            </li>
            <li>
                <Link to='/nfts'>NFTs</Link>
            </li>
            <li>
                <Link to='/community'>Community</Link>
            </li>

            <div className='connect-wallet'>
                <li>
                    <Link to={'/connect-wallet'}>Connect Wallet</Link>
                </li>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar