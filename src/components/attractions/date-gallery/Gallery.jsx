import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

import img1 from '../../../assets/akbouch16.jpg'

import img2 from '../../../assets/dates-types.jpg'

import './gallery.css'

const Gallery = () => {

  return (
    <>
      <div className='Gallery-section'>
        <div className='nav'>
          <Navbar />
        </div>

        <img
          src={img1}
          alt=""
          className="Gallery-img"
        />

        <h1 className='Gallery-title'> Dates Gallery Festival</h1>

      </div>

      <div className="Gallery-body">
        <div className="body-text">
        <p className='paragraphe'>
        Every year Figuig hosts a gallery of dates in the heart of Ksar Zenaga Tachraft, you will find all types of dates with reasonable prices. 
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

export default Gallery