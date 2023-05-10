import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

import img1 from '../../../assets/women-with-hayek.jpg'

import img2 from '../../../assets/street7.jpg'

import './medina.css'

const Medina = () => {

  return (
    <>
      <div className='Medina-section'>
        <div className='nav'>
          <Navbar />
        </div>

        <img
          src={img1}
          alt=""
          className="Medina-img"
        />

        <h1 className='Medina-title'> Visit the old Medina</h1>

      </div>

      <div className="Medina-body">
        <div className="body-text">
        <p className='paragraphe'>
        It's an unforgettable experience just walking around the old medina smelling the air and be amazed of how the architecture.
        </p>
        </div>
        <div className="medina-img">
            <img src={img2} alt="" />
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </>


  )
}

export default Medina