import React from 'react'
import contactIcon from '../../assets/contact.png'
import './Navbar.css'

 function Navbar() {
  return (
    <div className='navbar'>
        <div>
      <h3 className='Title'>visitFiguig</h3>
      </div>

      <div>
      <ul>
        <li>See & Do</li>
        <li>Plan Your Trip</li>
        <li>Travel Essentials</li>
        <li>Experiences</li>
      </ul>
      </div>

      <div>
      <img className='contact-icon' src= {contactIcon} alt=""/>
      </div>
    </div>
  )
}

export default Navbar