import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

import img1 from '../../../assets/festival2.jpg'

import img2 from '../../../assets/festival1.jpg'

import './culture.css'

const Culture = () => {

  return (
    <>
      <div className='Culture-section'>
        <div className='nav'>
          <Navbar />
        </div>

        <img
          src={img1}
          alt=""
          className="Culture-img"
        />

        <h1 className='Culture-title'> Oasis Culture Festival</h1>

      </div>

      <div className="Culture-body">
        <div className="body-text">
        <p className='paragraphe'>
        From 19 to 21 August, of every year the oasis of Figuig hosts the Festival of
                      Oasian Culture, organized under the patronage of HM King Mohammed VI with the theme «Oasian heritage, roots and horizons».
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

export default Culture