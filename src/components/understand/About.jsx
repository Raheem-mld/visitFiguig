import React from 'react'
import Navbar from '../navbar/Navbar'
import img1 from '../../assets/view10.jpg'
import img2 from '../../assets/figuig-1992.jpg'
import img7 from '../../assets/old-lajmaat.jpg'
import img4 from '../../assets/tachraft1.jpg'
import img5 from '../../assets/riyad-zenaga-inside.jpg'
import img6 from '../../assets/azrou3.jpg'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

import Season from './Season/Season'

import Footer from '../footer/Footer'

import './About.css'

const About = () => {

  return (
    <>
    <div className='About-section'>
      <div className='nav'>
        <Navbar />
      </div>
      
      <img
        src={img1}
        alt=""
        className="about-img"
      />

      <h1 className='About-title'>About FIGUIG</h1>

    </div>

      <div className='about-content'>

        <h1 className='content-title'>Traditions of Figuig</h1>

        <div className='content-box'>

          <div className="box-one">
            <div  className="content-img">
              <img
              src={img2}
              alt=""
             
              />
            </div>

            <div className='about-texts'>
              <p className='text-title'>Language</p>
              <p className='first-text'>
                Arabic is the official language of Morocco<br></br>
                 and the primary language used in Figuig <br></br>
                 is TAMAZIGHT.
              </p>
            </div>
          </div>

          <div className="box-two">
            <div className='about-texts2'>
                <p className='text-title'>Culture</p>
                <p className='first-text'>
                Figuig is an oasis town that has a rich and diverse cultural heritage, influenced by its Berber,
                 Arab, Jewish and Saharan roots. <br></br>
                 The town is divided into seven ksour, or fortified districts, 
                 each with its own history, architecture and traditions. <br></br>
                 The people of Figuig speak a Berber dialect, 
                 Figuig Berber, as well as Moroccan Arabic. <br></br>
                 They have preserved their oral traditions, customs, languages, music, dance, rituals, festivities, traditional
                  medicine and pharmacopoeia, table arts, traditional skills and handicrafts.<br></br>
                   Some of the cultural expressions 
                  of Figuig include the production of textiles,
                 embroidery and carpets. Figuig is also famous for its dates, which are cultivated in the palm groves using an ancient irrigation system.
                </p>
              </div>

              <div  className="content-img">
                <img
                src={img7}
                alt=""           
                />

              </div>
            
          </div>
            
        </div>

      </div>

      <div className="seasons">
        <h1 className='season-title'>Climate & Seasons</h1>

        <Season />

      </div>

      <div className="explore">
          <h1 className='explore-title'>Keep exploring</h1>
          <div className="explore-cards">
            <Card sx={{ borderRadius: '16px' }} className='explore-card'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={img4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                  <span className='slogans'> Pick your best time to come</span>
                </Typography>

              </CardContent>
              <hr />
              <CardActions>
                <Link to="/time-to-come" className="link-without-underline"><span className='more'>Learn More ></span></Link>
              </CardActions>
            </Card>


            <Card sx={{ borderRadius: '16px' }} className='explore-card'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={img5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                  <span className='slogans'> Hostels & Guest houses </span>
                </Typography>
              </CardContent>
              <hr />
              <CardActions>
                <Link to="/hotels" className="link-without-underline"><span className='more'>Learn More ></span></Link>
              </CardActions>
            </Card>


            <Card sx={{ borderRadius: '16px' }} className='explore-card'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={img6}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                  <span className='slogans'> Transportation</span>
                </Typography>

              </CardContent>
              <hr />
              <CardActions>
                <Link to="/transportation" className="link-without-underline"><span className='more'>Learn More ></span></Link>
              </CardActions>
            </Card>

          </div>
        </div>

       

   
      <div>
          <Footer />
        </div>

      </>
    
    
  )
}

export default About
