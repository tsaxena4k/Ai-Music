import React from 'react'
import "../assets/styles/Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2 className="logo">AI-Music</h2>
        <ul className="navItems">
            <li className="navItem">About</li>
            <li className="navItem team">Team</li>
        </ul>
    </div>
  )
}
