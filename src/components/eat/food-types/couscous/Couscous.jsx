import React, { useRef, useState } from 'react'
import Navbar from '../../../navbar/Navbar'
import Footer from '../../../footer/Footer'

import img1 from '../../../../assets/lkroureb.png'
import img2 from '../../../../assets/ablboul-dlkroureb.jpg'

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
       
        <h1 className='Couscous-title'>Ablboul d lkroreb (Couscous)</h1>

      </div>

      <div className="Couscous-body">
        <div className="Couscous-texts">
        <p className="Couscous-text">
            It's called Ablboul d lkroreb it's a diferent type of couscous plus cabbage and meat.
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