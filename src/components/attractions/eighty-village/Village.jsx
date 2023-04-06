import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

import img2 from '../../../assets/tower.jpg'

import './village.css'

const Village = () => {

  return (
    <>
      <div className='Village-section'>
        <div className='nav'>
          <Navbar />
        </div>

        <img
          src={img2}
          alt=""
          className="Village-img"
        />

        <h1 className='Village-title'> Visit the Eighty villages </h1>

      </div>

      <div className="Village-body">
        <div className="body-text">
        <p className='paragraphe'>
        It's amongst the places you should give a visit, it's a nice place for the kids entertainments.
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

export default Village