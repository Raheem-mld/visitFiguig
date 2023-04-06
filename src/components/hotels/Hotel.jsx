import React from 'react'
import Navbar from '../navbar/Navbar'
import img1 from '../../assets/plane.png'
import img2 from '../../assets/la-maison-de-nanna2.jpg'
import img3 from '../../assets/auberge-oasis-salon.jpg'
import img4 from '../../assets/riyad-zenaga-inside.jpg'
import img5 from '../../assets/maison-ajdir.webp'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Footer from '../footer/Footer'
import './Hotel.css'


const Hotel = () => {      

  return (
    <>
    <div className='Hotel-section'>
      <div className='nav'>
        <Navbar />
      </div>
      
      <img
        src={img1}
        alt=""
        className="Hotel-img"
      />

      <h1 className='Hotel-title'>Figuig Hotels</h1>

    </div>

    <div className="Hotel-cards">

          <h1 className='hotel-card-title'>Hostels & Guest houses</h1>

        

          <div className="hotel-cards">

          <Card sx={{ borderRadius: '16px' }} className='hotel-card'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={img2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                  <span className='slogans'> La Maison de Nanna </span>
                </Typography>

              </CardContent>
              <hr />
              <CardActions>
                 <Link to="/hotels/Maison-Nanna " className="link-without-underline"><span className='btn-learnmore'>See More ></span></Link>
              </CardActions>
            </Card>

            <Card sx={{ borderRadius: '16px' }} className='hotel-card'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={img3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                  <span className='slogans'>  Auberge Oasis</span>
                </Typography>

              </CardContent>
              <hr />
              <CardActions>
              <Link to="/hotels/Auberge-Oasis " className="link-without-underline"><span className='btn-learnmore'>See More ></span></Link>
              </CardActions>
            </Card>


            <Card sx={{ borderRadius: '16px' }} className='hotel-card'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={img4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                  <span className='slogans'> Riyad Zenaga </span>
                </Typography>

              </CardContent>
              <hr />
              <CardActions>
              <Link to="/hotels/Riyad-Zenaga " className="link-without-underline"><span className='btn-learnmore'>See More ></span></Link>
              </CardActions>
            </Card>

            <Card sx={{ borderRadius: '16px' }} className='hotel-card'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={img5}
                className="do-images"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                  <span className='slogans'> Maison d'hôte Ajdir </span>
                </Typography>

              </CardContent>
              <hr />
              <CardActions>
              <Link to="/hotels/hôte-Ajdir" className="link-without-underline"><span className='btn-learnmore'>See More ></span></Link>
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
  
  export default Hotel