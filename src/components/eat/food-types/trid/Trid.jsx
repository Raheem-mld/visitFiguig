import React, { useRef, useState } from 'react'
import Navbar from '../../../navbar/Navbar'
import Footer from '../../../footer/Footer'

import img1 from '../../../../assets/shopping-in-saudi-ar.jpg'
import img2 from '../../../../assets/trid.jpg'

import './trid.css'

const Trid = () => {

  return (
    <>
      <div className='Trid-section'>
        <div className='nav'>
          <Navbar />
        </div>
        <div  className="header-img"> 
             <img
          src={img1}
          alt=""
         
        />

        </div>
       
        <h1 className='Trid-title'>Trid</h1>

      </div>

      <div className="Trid-body">
        <div className="Trid-texts">
        <p className="Trid-text">
        Figuig is known about it's diverse dishes, and the best way to explore its diversity it's definitly
             by tasting home's food such as the association provides, or also in your guest houses, you have just to make an order.
             One of the dishes you should try it's called Trid its a mix of the dough plus meat or chicken, then a little bit of hummus, raisin and onion.
        </p>
        </div>
        <div className="Trid-img">
            <img src={img2} alt="" />
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </>


  )
}

export default Trid