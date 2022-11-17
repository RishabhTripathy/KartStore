import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css";

export default function Navbar() {
  return (
    
    <nav className='nav-elements'>
    <ul className="nav-ul">
        <li><NavLink end to='/'  activeclassname="active"  >Home</NavLink> </li>
        <li><NavLink end to='/About'  activeclassname="active"  >About</NavLink> </li>
        <li><NavLink end to='/Contact'  activeclassname="active"  >Contact Us</NavLink> </li>
    </ul>    
    </nav>
  )
}
