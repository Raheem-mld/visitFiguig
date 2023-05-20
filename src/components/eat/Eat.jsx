import React, { useRef, useState } from 'react'
import Navbar from '../navbar/Navbar'

import img1 from '../../assets/background18.png'

import img2 from '../../assets/aziza1.jpg'
import img3 from '../../assets/trid1.jpg'
import img4 from '../../assets/berkoukes.jpg'
import img5 from '../../assets/ablboul-dlkroureb.jpg'
import img6 from '../../assets/aghroum-nabsal.jpg'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import Footer from '../footer/Footer'
import './eat.css'

const Eat = () => {

  return (
    <>
      <div className='Eat-section'>
        <div className='nav'>
          <Navbar />
        </div>

        <img
          src={img1}
          alt=""
          className="Eat-img"
        />

        <h1 className='Eat-title'>Food & drinks</h1>

      </div>

      <div className="activitie-title">
        What to eat
      </div>

      <div className="activities-section">

        <div className="Eat-cards">
          <Card sx={{ borderRadius: '16px' }} className='Eat-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image={img2}
            />
            <div className="Eats">
              <div className="Eat1">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='Eat-slogans'>
                    <span className='quotes'> Dates</span>
                  </Typography>
                  <Typography className='Eat-texts'>
                    <span className='Eat-text'> You can find it all over the oasis...</span>
                  </Typography>
                </CardContent>
              </div>
              <hr />
              <div className="Eat2">
                <CardActions>
                  <Link to="/Eat/dates" className="link-without-underline">
                    <span className='more-food'>Learn More ></span>
                  </Link>
                </CardActions>
              </div>
            </div>
          </Card>


          <Card sx={{ borderRadius: '16px' }} className='Eat-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image={img3}
            />
            <div className="Eats">
              <div className="Eat1">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='Eat-slogans'>
                    <span className='quotes'>Trid</span>
                  </Typography>
                  <Typography className='Eat-texts'>
                    <span className='Eat-text'>You can order it from an association...</span>
                  </Typography>
                </CardContent>
              </div>
              <div className="Eat2"></div>
              <hr />
              <CardActions>
                <Link to="/Eat/trid" className="link-without-underline"><span className='more-food'>Learn More ></span></Link>
              </CardActions>
            </div>
          </Card>


          <Card sx={{ borderRadius: '16px' }} className='Eat-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image={img4}
            />
            <div className="Eats">
              <div className="Eat1">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='Eat-slogans'>
                    <span className='quotes'> Berkoukes</span>
                  </Typography>
                  <Typography className='Eat-texts'>
                    <span className='Eat-text'> You can order it from an association...
                    </span>
                  </Typography>
                </CardContent>
              </div>
              <div className="Eat2">
                <hr />
                <CardActions>
                  <Link to="/Eat/berkoukes" className="link-without-underline"><span className='more-food'>Learn More ></span></Link>
                </CardActions>
              </div>
            </div>
          </Card>


          <Card sx={{ borderRadius: '16px' }} className='Eat-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image={img5}
            />
            <div className="Eats">
              <div className="Eat1">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='Eat-slogans'>
                    <span className='quotes'>Ouchou dlkroreb (couscous)</span>
                  </Typography>
                  <Typography className='Eat-texts'>
                    <span className='Eat-text'>You can order it from an association...</span>
                  </Typography>

                </CardContent>
              </div>

              <div className="Eat2">
                <hr />
                <CardActions>
                  <Link to="/Eat/couscous" className="link-without-underline"><span className='more-food'>Learn More ></span></Link>
                </CardActions>
              </div></div>
          </Card>

          <Card sx={{ borderRadius: '16px' }} className='Eat-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image={img6}
            />
            <div className="Eats">
              <div className="Eat1">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='Eat-slogans'>
                    <span className='quotes'> Aghroum nebsal </span>
                  </Typography>
                  <Typography className='Eat-texts'>
                    <span className='Eat-text'>You can order it from an association...</span>
                  </Typography>

                </CardContent>
              </div>
              <div className="Eat2">
                <hr />
                <CardActions>
                  <Link to="/Eat/pates" className="link-without-underline">
                    <span className='more-food'>Learn More ></span></Link>
                </CardActions>
              </div></div>
          </Card>



        </div>
      </div>

      <div>
        <Footer />
      </div>

    </>


  )
}

export default Eat