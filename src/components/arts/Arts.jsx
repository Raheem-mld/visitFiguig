import React from 'react'
import img1 from '../../assets/festival2.jpg'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './arts.css'

const Arts = () => {
  return (
    <div className='Arts'>

      <div  className="Artsimg" >
         <img src={img1} alt=""/>
      </div>

      <div className='Arts-info'>
        <h2>Cultural Heritage in Figuig</h2>

        <hr/>

        <p>Enjoy our culture,</p>

        <p>Our culture is our treasure, come and discover it.</p>
        <div className='btns-arts'>
        <Link to="/sign-up" className="link-without-underline"><Button size="small"><span  className='Arts-btn'>See More ></span></Button></Link>
         
        </div>
       
      </div>
      

      
    </div>
  )
}

export default Arts
