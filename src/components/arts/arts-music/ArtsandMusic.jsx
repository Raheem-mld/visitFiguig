import React from 'react'

import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

import img1 from '../../../assets/a9rdach1.png'
import img2 from '../../../assets/festival4.jpg'
import img3 from '../../../assets/aztta.jpg'

import { Link } from 'react-router-dom';

import './artsandmusic.css'

const ArtsandMusic = () => {

  return (
    <>
    <div className='ArtsandMusic-section'>
      <div className='nav'>
        <Navbar />
      </div>
      
      <img
        src={img1}
        alt=""
        className="ArtsandMusic-img"
      />

      <h1 className='ArtsandMusic-title'>Figuig's Cultural Heritage</h1>

    </div>

      <div className='ArtsandMusic-content'>

        <h1 className='content-title'>Want to know about Figuig's cultural heritage ?</h1>

        <div className='content-box'>

          <div className="box-one">
            <div  className="content-img">
              <img
              src={img3}
              alt=""
             
              />
            </div>

            <div className='ArtsandMusic-texts'>
              <p className='text-title'>Handicraft industry in Figuig</p>
              <p className='first-text'>
                <p>Figuig has a rich tradition of handicrafts that has been passed down through generations. The handicraft industry in Figuig 
              is a vital part of the country's cultural heritage and economy.</p>

              <p>Figuiguis
              handicrafts are known for their intricate designs and the use of high-quality materials such as leather, textiles, ceramics, and metals.</p>
          
              </p>

              <Link to="/handicraft" className="link-without-underline"><span  className='disc-more'>Learn More...</span></Link>

            </div>
          </div>

          <div className="box-two">
            <div className='ArtsandMusic-texts2'>
                <p className='text-title'>Music and arts</p>
                <p className='second-text'>
                    <p>
                The music of eastern Morocco is characterized by its unique blend of various cultural influences, 
                including Berber, Arab, and Andalusian music. The region is home to several traditional music genres and instruments, including the guembri 
                (a three-stringed bass instrument), the krakebs (a metallic percussion instrument), 
                and the gnaoua music, which originated from the descendants of West African slaves.</p>
                <p>      Doundoun & Ourar music are the most popular music genres in Figuig.</p>
          
                </p>

                <Link to="/music" className="link-without-underline"><span  className='disc-more'>Learn More...</span></Link>


              </div>

              <div  className="content-img">
                <img
                src={img2}
                alt=""           
                />

              </div>
            
          </div>
            
        </div>

      </div>

      <div>
                <Footer />
            </div>

     

</>

    
)
}

export default ArtsandMusic

