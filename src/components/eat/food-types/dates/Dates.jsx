import React, { useRef, useState } from 'react'
import Navbar from '../../../navbar/Navbar'
import Footer from '../../../footer/Footer'

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
        <div  className="header-img"> 
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
            Figuig is known about it's diverse dishes, and the best way to explore its diversity it's definitly
             by tasting home's food such as the association provides, you have just to make an order.
             There are many types of dates in the oasis, such as Aziza the best one, and there is too LAASYAN, BOUFAKKOUS, AZIZA AMANZOU, LMAJHOUL.
        </p>
        </div>
        <div className="Dates-img">
            <img src={img2} alt="" />
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </>


  )
}

export default Dates