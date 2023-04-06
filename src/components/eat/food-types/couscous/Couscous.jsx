import React, { useRef, useState } from 'react'
import Navbar from '../../../navbar/Navbar'
import Footer from '../../../footer/Footer'

import img1 from '../../../../assets/shopping-in-saudi-ar.jpg'
import img2 from '../../../../assets/couscous.jpg'

import './couscous.css'

const Couscous = () => {

  return (
    <>
      <div className='Couscous-section'>
        <div className='nav'>
          <Navbar />
        </div>
        <div  className="header-img"> 
             <img
          src={img1}
          alt=""
         
        />

        </div>
       
        <h1 className='Couscous-title'>Ouchou dlkroreb (Couscous)</h1>

      </div>

      <div className="Couscous-body">
        <div className="Couscous-texts">
        <p className="Couscous-text">
            Figuig is known about it's diverse dishes, and the best way to explore its diversity it's definitly
             by tasting home's food such as the association provides, or also in your guest houses, you have just to make an order.
             One of the dishes you should try it's called Ouchou dlkroreb it's kind of like couscous plus cabbage and meat.
        </p>
        </div>
        <div className="Couscous-img">
            <img src={img2} alt="" />
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </>


  )
}

export default Couscous