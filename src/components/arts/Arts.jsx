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
        <h2>Arts & Music in Figuig</h2>

        <hr/>

        <p>Enjoy our culture,</p>

        <p>You will See and live our special culture.</p>
        <div className='btns-arts'>
        <Link to="/arts&music" className="link-without-underline"><Button size="small"><span  className='Arts-btn'>See More ></span></Button></Link>
         
        </div>
       
      </div>
      

      
    </div>
  )
}

export default Arts
