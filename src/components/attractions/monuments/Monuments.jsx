import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

import img2 from '../../../assets/minaret2.jpg'

import './monuments.css'

const Monuments = () => {

  return (
    <>
      <div className='Monuments-section'>
        <div className='nav'>
          <Navbar />
        </div>

        <img
          src={img2}
          alt=""
          className="Monuments-img"
        />

        <h1 className='Monuments-title'> Monuments in Figuig's pool</h1>

      </div>

      <div className="Monuments-body">
        <div className="body-text">
        <p className='paragraphe'>
        Drawn up majestically in the heart of the city of Figuig, the stony octagonal minaret,
                  one of the oldest monuments of the Oriental, presents an imposing and unprecedented allure that does not leave indifferent.
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

export default Monuments