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

        <h1 className='Gallery-title'> Dates Exihibition Festival</h1>

      </div>

      <div className="Gallery-body">
        <div className="body-text">
        <p className='paragraphe'>
        Dates exhibition is a type of event where producers, traders, and consumers of dates and local products can meet, exchange, and learn about the different varieties, origins, and uses of this delicious and nutritious fruit. Dates exhibition can be held
         in different countries and regions, depending on the local production and demand of dates.
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