import React from 'react'
import img1 from '../../assets/aziza7.jpg'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Food.css'

const Food = () => {
  return (
    <div className='food'>

      <div  className="foodimg" >
         <img src={img1} alt=""/>
      </div>

      <div className='food-info'>
        <h2>Authentically Figuig</h2>

        <hr/>

        <p>Eat and Drink</p>

        <p>You will taste something that you have never tasted anywhere else in the world.</p>
        <div className='btns'>
        <Link to="/eat" className="link-without-underline">
          <Button size="small">
            <span  className='food-btn'>See More ></span>
          </Button>
        </Link>
         
        </div>
       
      </div>
      

      
    </div>
  )
}

export default Food
