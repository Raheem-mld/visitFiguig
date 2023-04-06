import React, { useRef, useState } from 'react'
import Navbar from '../navbar/Navbar'

import img1 from '../../assets/jorf.jpg'
import img2 from '../../assets/dattes-pollen.jpg'
import img3 from '../../assets/tour-de-guet-azrou-figuig.jpg'
import img4 from '../../assets/Saison-récolte-dattes.jpg'
import img5 from '../../assets/poolikoudass.jpg'
import img6 from '../../assets/minaret.jpg'
import img7 from '../../assets/women-with-hayek.jpg'
import img8 from '../../assets/tower.jpg'

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
import './do.css'

const Do = () => {

  return (
    <>
      <div className='Do-section'>
        <div className='nav'>
          <Navbar />
        </div>

        <img
          src={img1}
          alt=""
          className="Do-img"
        />

        <h1 className='Do-title'>Activities & attractions</h1>

      </div>

      <div className="activitie-title">
        Attractions you may like
      </div>

      <div className="activities-section">

        <div className="do-cards">

          <Card sx={{ borderRadius: '16px' }} className='do-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="150"
              image={img2}
            />
             <div className="dos">
              <div className="do1">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='do-slogans'>
                <span className='quotes'>Akbouch Festival</span>
              </Typography>
              <Typography className='do-texts'>
                <span className='do-text'>It is a festival that takes place every year it's called al-Mawlid al-nabawi, generally celebrated on the 12th Rabi-el-Aouel...</span>
              </Typography>
            </CardContent>
            </div>
            <div className="do2"></div>
            <hr />
            <CardActions>
              <Link to="/do/akbouch" className="link-without-underline"><span className='btn-more'>Learn More ></span></Link>
            </CardActions>
            </div>
          </Card>


          <Card sx={{ borderRadius: '16px' }} className='do-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="150"
              image={img3}
            />
            <div className="dos">
              <div className="do1">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='do-slogans'>
                    <span className='quotes'> Oasis Culture Festival</span>
                  </Typography>
                  <Typography className='do-texts'>
                    <span className='do-text'>From 19 to 21 August, of every year the oasis of Figuig hosts the Festival of
                      Oasian Cultures, ...</span>
                      {/*  organized under the patronage of HM King Mohammed VI... with the theme «Oasian heritage, roots and horizons». */}
                  </Typography>

                </CardContent>
              </div>
              <div className="do2">
                <hr />
                <CardActions>
                  <Link to="/do/oasis-culture" className="link-without-underline"><span className='btn-more'>Learn More ></span></Link>
                </CardActions>
              </div>
            </div>
          </Card>


          <Card sx={{ borderRadius: '16px' }} className='do-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="150"
              image={img4}
            />
            <div className="dos">
              <div className="do1">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='do-slogans'>
                <span className='quotes'> Date gallery</span>
              </Typography>
              <Typography className='do-texts'>
                <span className='do-text'> Every year Figuig hosts a gallery of dates in the heart of Ksar Zenaga Tachraft...
                </span>
                {/* you will find all types of dates with reasonable prices. */}
              </Typography>
            </CardContent>
            </div>
            <div className="do2">
            <hr />
            <CardActions>
              <Link to="/do/date-gallery" className="link-without-underline"><span className='btn-more'>Learn More ></span></Link>
            </CardActions>
            </div>
            </div>
          </Card>


          <Card sx={{ borderRadius: '16px' }} className='do-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="150"
              image={img5}
            />
              <div className="dos">
              <div className="do1">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='do-slogans'>
                <span className='quotes'> Swimming in Bahbouha & Ikoudas</span>
              </Typography>
              <Typography className='do-texts'>
                <span className='do-text'>It's a special experience to swim in a hot natural water coming from a water spring...</span>
              </Typography>
              
            </CardContent>
            </div>
           
            <div className="do2">
            <hr />
            <CardActions>
              <Link to="/do/swimming" className="link-without-underline"><span className='btn-more'>Learn More ></span></Link>
            </CardActions>
            </div></div>
          </Card>

          <Card sx={{ borderRadius: '16px' }} className='do-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="150"
              image={img6}
            />
              <div className="dos">
              <div className="do1">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='do-slogans'>
                <span className='quotes'> Visit The Monuments of Figuig</span>
              </Typography>
              <Typography className='do-texts'>
                <span className='do-text'>Drawn up majestically in the heart of the city of Figuig, the stony octagonal minaret,
                  one of the oldest monuments of the Oriental, ... </span>
                  {/* presents an imposing and unprecedented allure that does not leave indifferent. */}
              </Typography>

            </CardContent>
            </div>
            <div className="do2">
            <hr />
            <CardActions>
              <Link to="/do/visit-monuments" className="link-without-underline"><span className='btn-more'>Learn More ></span></Link>
            </CardActions>
            </div></div>
          </Card>

          <Card sx={{ borderRadius: '16px' }} className='do-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="150"
              image={img7}
            />
              <div className="dos">
              <div className="do1">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='do-slogans'>
                <span className='quotes'> Wandering down in the old Medina</span>
              </Typography>
              <Typography className='do-texts'>
                <span className='do-text'>It's an unforgettable experience just walking around the old medina smelling the air and be amazed of how the architecture...</span>
              </Typography>
            </CardContent>
            </div>
            <div className="do2">
            <hr />
            <CardActions>
              <Link to="/do/old-medina" className="link-without-underline"><span className='btn-more'>Learn More ></span></Link>
            </CardActions>
            </div></div>
          </Card>

          <Card sx={{ borderRadius: '16px' }} className='do-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="150"
              image={img8}
            />
              <div className="dos">
              <div className="do1">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='do-slogans'>
                <span className='quotes'> Give a visit to the Eighty villages </span>
              </Typography>
              <Typography className='do-texts'>
                <span className='do-text'>It's amongst the places you should give a visit, it's a nice place for the kids entertainments...</span>
              </Typography>
            </CardContent>
            </div>
            <div className="do2">
            <hr />
            <CardActions>
              <Link to="/do/eighty-villages" className="link-without-underline"><span className='btn-more'>Learn More ></span></Link>
            </CardActions>
            </div>
            </div>
          </Card>

        </div>
      </div>

      <div>
        <Footer />
      </div>

    </>


  )
}

export default Do