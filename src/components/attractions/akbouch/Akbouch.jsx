import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

import img1 from '../../../assets/akbouch2.jpg'
import img2 from '../../../assets/akbouch3.jpg'

import './akbouch.css'

const Akbouch = () => {

  return (
    <>
      <div className='Akbouch-section'>
        <div className='nav'>
          <Navbar />
        </div>

        <img
          src={img1}
          alt=""
          className="Akbouch-img"
        />

        <h1 className='Akbouch-title'>Akbouch Festival</h1>

      </div>

      <div className="akbouch-body">
        <div className="body-text">
          <p className='paragraphe'>
            Eid Al Mawlid Annabawi or "Lmouloud",
            In Figuig, this holiday is celebrated with religious lectures,
            recitations of verses from the Qur’an, and prophetic praises in mosques decorated with lights.
            Plus the youth celbrates in a different way using  crackers and fireworks wich producees loud noises and bright colors.
          </p>
        </div>
        <div className="akbouch-img">
          <img src={img2} alt="" />
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </>


  )
}

export default Akbouch