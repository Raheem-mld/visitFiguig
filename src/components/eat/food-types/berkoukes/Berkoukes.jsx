import React, { useRef, useState } from 'react'
import Navbar from '../../../navbar/Navbar'
import Footer from '../../../footer/Footer'

import img1 from '../../../../assets/shopping-in-saudi-ar.jpg'
import img2 from '../../../../assets/berkoukes.jpg'

import './berkoukes.css'

const Berkoukes = () => {

  return (
    <>
      <div className='Berkoukes-section'>
        <div className='nav'>
          <Navbar />
        </div>
        <div  className="header-img"> 
             <img
          src={img1}
          alt=""
         
        />

        </div>
       
        <h1 className='Berkoukes-title'>Berkoukes</h1>

      </div>

      <div className="berkoukes-body">
        <div className="berkoukes-texts">
        <p className="berkoukes-text">
            Figuig is known about it's diverse dishes, and the best way to explore its diversity it's definitly
             by tasting home's food such as the association provides, you have just to make an order.
             One of the dishes you should try it's called BERKOUKES it's kind of like couscous but it hits different its a mix of dough and vegetables with meat.
        </p>
        </div>
        <div className="berkoukes-img">
            <img src={img2} alt="" />
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </>


  )
}

export default Berkoukes