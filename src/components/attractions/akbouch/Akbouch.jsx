import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

import img2 from '../../../assets/sun.jpg'

import './akbouch.css'

const Akbouch = () => {

  return (
    <>
      <div className='Akbouch-section'>
        <div className='nav'>
          <Navbar />
        </div>

        <img
          src={img2}
          alt=""
          className="Akbouch-img"
        />

        <h1 className='Akbouch-title'>Akbouch Festival</h1>

      </div>

      <div className="akbouch-body">
        <div className="body-text">
        <p className='paragraphe'>
        Mawlid al-Nabi, which in Arabic means the prophet’s birthday, marks the birth of the prophet Muhammad. 
        Some Muslims commemorate this event because of the importance of the prophet in Islam. Believers believe that the Koran, God’s ultimate testament to humanity, was revealed to the prophet and that the latter is the most important messenger sent to humanity. 
        Those celebrating the event will attend meals in mosques with other members of the community and spend the day reflecting on the teachings of the prophet.
        The way Figuig celebrates Mawlid al-Nabi, by crackers as you will see in those images bellow.
        </p>
        </div>
        <div className="body-img">
            <img src={img2} alt="" />
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </>


  )
}

export default Akbouch