import React, { useRef, useState } from 'react'
import Navbar from '../../../navbar/Navbar'
import Footer from '../../../footer/Footer'

import img1 from '../../../../assets/shopping-in-saudi-ar.jpg'
import img2 from '../../../../assets/grape.jpg'

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
       
        <h1 className='Pates-title'>Aghroum nabsal (Pâte with onion)</h1>

      </div>

      <div className="Pates-body">
        <div className="Pates-texts">
        <p className="Pates-text">
            Figuig is known about it's diverse dishes, and the best way to explore its diversity it's definitly
             by tasting home's food such as the association provides, you have just to make an order.
             One of the dishes you should try it's called Aghroum nabsal it's like a wrap of a dough and inside there are some vegetables like onion, red pepper, carrotand meat.
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