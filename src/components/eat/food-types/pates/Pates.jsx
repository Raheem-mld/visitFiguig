import React, { useRef, useState } from 'react'
import Navbar from '../../../navbar/Navbar'
import Footer from '../../../footer/Footer'

import img1 from '../../../../assets/aghroum-nabsal.png'
import img2 from '../../../../assets/aghroum.png'

import './pates.css'

const Pates = () => {

  return (
    <>
      <div className='Pates-section'>
        <div className='nav'>
          <Navbar />
        </div>
        <div  className="header-img"> 
             <img
          src={img1}
          alt=""
         
        />

        </div>
       
        <h1 className='Pates-title'>Aghroum nabsal (Dough with onion)</h1>

      </div>

      <div className="Pates-body">
        <div className="Pates-texts">
        <p className="Pates-text">
            It's called Aghroum nabsal it's like a wrap of a dough and inside there are some vegetables like onion, red pepper, carrot and meat.
        </p>
        </div>
        <div className="Pates-img">
            <img src={img2} alt="" />
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </>


  )
}

export default Pates