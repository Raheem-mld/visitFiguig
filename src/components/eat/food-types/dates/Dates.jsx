import React, { useRef, useState } from 'react'
import Navbar from '../../../navbar/Navbar'
import Footer from '../../../footer/Footer'

import Datescards from './dates-cards/Datescards'
import img1 from '../../../../assets/shopping-in-saudi-ar.jpg'
import img2 from '../../../../assets/aziza.jpg'

import './dates.css'

const Dates = () => {

  return (
    <>
      <div className='Dates-section'>
        <div className='nav'>
          <Navbar />
        </div>
        <div className="header-img">
          <img
            src={img1}
            alt=""

          />

        </div>

        <h1 className='Dates-title'>Dates</h1>

      </div>

      <div className="Dates-body">
        <div className="Dates-texts">
          <p className="Dates-text">
            Figuig is known about it's diverse dates, such as AZIZA, AZIZA AMANZOU,
            LAASYAN, BOUFAKKOUS, and LMAJHOUL.
          </p>
        </div>
        
        <Datescards />
      </div>

      <div>
        <Footer />
      </div>

    </>


  )
}

export default Dates