import React from 'react'
import contactIcon from '../../assets/contact.png'

import { Link } from 'react-router-dom';
import './Navbar.css'

 const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
      <Link to="/" className='Title'>visitFiguig</Link>
      </div>

      <div>
        <ul className='list-navbar'>
        <Link to="/do" className="link-without-underline"><li>See & Do</li></Link>
        <Link to="/understand" className="link-without-underline"><li>Plan Your Trip</li></Link>
        <Link to="/travel-safety-tips" className="link-without-underline"> <li>Travel Essentials</li></Link>
        <Link to="/eat" className="link-without-underline"><li>Experiences</li></Link>
        </ul>
      </div>

      <div className='contact'>
        <img className='contact-icon' src= {contactIcon} alt=""/>
      </div>
    </div>
  )
}

export default Navbar