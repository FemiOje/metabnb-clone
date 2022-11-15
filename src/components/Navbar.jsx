import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>

            <li>
                <Link to={/home}>Home</Link>
            </li>
            <li>
                <Link to={/place-to-stay}>Place to stay</Link>
            </li>
            <li>
                <Link to={/nfts}>NFTs</Link>
            </li>
            <li>
                <Link to={/ommunity}>Community</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar