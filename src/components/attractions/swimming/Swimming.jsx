import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

import img2 from '../../../assets/poolikoudass.jpg'

import './swimming.css'

const Swimming = () => {

  return (
    <>
      <div className='Swimming-section'>
        <div className='nav'>
          <Navbar />
        </div>

        <img
          src={img2}
          alt=""
          className="Swimming-img"
        />

        <h1 className='Swimming-title'> Swimming in Figuig's pool</h1>

      </div>

      <div className="Swimming-body">
        <div className="body-text">
        <p className='paragraphe'>
        It's a special experience to swim in a hot natural water coming from a water spring.
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

export default Swimming