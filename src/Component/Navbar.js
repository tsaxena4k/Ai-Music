import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to={"/"}><h2 className="logo">AI-Music</h2></Link>

      <ul className="navItems">
        <li className="navItem">About</li>
        <li className="navItem team">Team</li>
      </ul>
    </div>
  )
}

export default Navbar