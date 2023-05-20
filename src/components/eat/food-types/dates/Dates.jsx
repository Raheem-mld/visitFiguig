import React from 'react'
import Navbar from '../../../navbar/Navbar'

import img1 from '../../../../assets/diff-dates.jpg'

import img5 from '../../../../assets/aziza3.jpg'
import img6 from '../../../../assets/boufakkous.jpg'
import img7 from '../../../../assets/laasyan1.jpg'
import img8 from '../../../../assets/lmajhoul1.jpg'

import img9 from '../../../../assets/tini-doghi.png'

import Footer from '../../../footer/Footer'
import './dates.css'

const Dates = () => {

  return (
    <>
      <div className='Date-section'>
        <div className='nav'>
          <Navbar />
        </div>

        <img
          src={img1}
          alt=""
          className="Date-img"
        />

        <h1 className='Date-title'>Types of dates</h1>

      </div>

      <div className="Date-infos">

        <div className="Date-info">
          <div className='left-info'>

            <p className='safe-title'>Aziza</p>
            <p className='safe-sloagan'>  
            Aziza dates are a rare type of dates that are grown only in the oasis of Figuig.
            They are small, round and light brown,
              with a low sugar content and a long shelf life. They can be preserved
               for up to two years before spoiling. Aziza dates are highly valued 
               for their nutritional value and their unique flavor. They are rich in fiber, 
            potassium, iron, magnesium, antioxidants and other minerals and vitamins. 
            </p>
          </div>

          <div className='right-info'>
            <img src={img5} alt="" />
          </div>
        </div>

        <div className="Date-info">
          <div className='left-info'>
            <img src={img6} alt="" />
          </div>
          <div className='right-info'>
            <p className='safe-title'>Boufeggous</p>
            <p className='safe-sloagan'>
            Boufeggous dates grows in Figuig.
            They are small, Oval and dark brown when it's all riped,
              with a low sugar content and a long shelf life. They can be preserved
               for up to two years before spoiling.
            </p>
          </div>
        </div>

        <div className="Date-info">
          <div className='left-info'>
            <p className='safe-title'>Laasyan</p>
            <p className='safe-sloagan'>
            Laasyan dates grows in Figuig.
            They are a little bit tall, rectangular and dark brown when it's all riped,
              with a high sugar content and a long shelf life. They can be preserved
               for up to two years before spoiling.
               </p>
        </div>

          <div className='right-info'>
            <img src={img7} alt="" />
          </div>
        </div>

        <div className="Date-info">
          <div className='left-info'>
            <img src={img8} alt="" />
          </div>
          <div className='right-info'>
            <p className='safe-title'>Lmajhoul</p>
            <p className='safe-sloagan'>
            Lmajhoul dates are a rare type of dates that are grown mainly
             in Morocco and of corse in Figuig. They are large, sweet and soft,
             with a reddish-brown color and a wrinkled skin. Lmajhoul dates
              are considered to be the king of dates, and they are highly
               prized for their rich flavor and nutritional value. 
               They are often eaten fresh or dried, or used to make desserts, jams, 
               syrups and other delicacies. Majhool dates are also known for their health benefits,
             as they are rich in fiber, potassium, iron, magnesium and antioxidants. </p>
          </div>
        </div>


      <div className="down-datte">
        <p className='down-text'>
          You can try the best match dates with milk (aghi) :
        </p>
        <div className="aghi-img">
        <img src={img9} alt="" />
        </div>
      </div>

      </div>

      <div>
        <Footer />
      </div>

    </>


  )
}

export default Dates