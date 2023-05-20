import React from 'react'
import Navbar from '../navbar/Navbar'
import img1 from '../../assets/background7.png'
import img2 from '../../assets/old-lajmaat.jpg'
import img3 from '../../assets/riyad-zenaga-inside.jpg'
import img4 from '../../assets/azrou3.jpg'

import img5 from '../../assets/sandage2.jpg'
import img6 from '../../assets/background3.jpg'
import img7 from '../../assets/akbouch2.jpg'
import img8 from '../../assets/background1.png'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Footer from '../footer/Footer'
import './timetocome.css'

const Timetocome = () => {

  return (
    <>
      <div className='Time-section'>
        <div className='nav'>
          <Navbar />
        </div>

        <img
          src={img1}
          alt=""
          className="Time-img"
        />

        <h1 className='Time-title'>Your best time to come</h1>

      </div>

      <div className="Time-infos">

        <div className="Time-info">
          <div className='left-info'>

            <p className='safe-title'>Summer</p>
            <p className='safe-sloagan'>  In summer, the temperature can reach up to 40°C, but the oasis provides a cool and green refuge for its inhabitants and visitors. Besides you can enjoy free pools,
              and an activity called "GUERRABA" which is like a festival of throwing water to each others in the streets.
              Summer is also a time for cultural festivals, such as "Oasis Culture Festival" , which attracts tourists.
            </p>
          </div>

          <div className='right-info'>
            <img src={img5} alt="" />
          </div>
        </div>

        <div className="Time-info">
          <div className='left-info'>
            <img src={img6} alt="" />
          </div>
          <div className='right-info'>
            <p className='safe-title'>Autumn</p>
            <p className='safe-sloagan'>
              It's the date harvest season.
              Date harvest season is the period when the date fruits are ripe and ready to be picked from the date palm trees.
              Harvesting dates can be done by hand, by shaking the fruit clusters into containers, or by cutting off entire branches and letting them ripen indoors.
              A single date palm tree can produce around 200 to 300 pounds of date fruits per year.
              The harvest season in Figuig starts in September and lasts until January. The main varieties grown are Aziza, Mejhool, Laasyan, and Boufeggous.

            </p>
          </div>
        </div>

        <div className="Time-info">
          <div className='left-info'>
            <p className='safe-title'>Winter</p>
            <p className='safe-sloagan'>
              Eid Al Mawlid Annabawi or "Lmouloud",
              In Figuig, this holiday is celebrated with religious lectures,
              recitations of verses from the Qur’an, and prophetic praises in mosques decorated with lights.
              Plus the youth celbrates in a different way using  crackers and fireworks wich producees loud noises and bright colors.</p>
          </div>

          <div className='right-info'>
            <img src={img7} alt="" />
          </div>
        </div>

        <div className="Time-info">
          <div className='left-info'>
            <img src={img8} alt="" />
          </div>
          <div className='right-info'>
            <p className='safe-title'>Spring</p>
            <p className='safe-sloagan'>
              Enjoy the natural beauty and biodiversity of the oasis, which hosts many species of birds,
              reptiles, mammals and plants. You could also hike or bike in the nearby mountains or valleys.
              Enjoy also the Palm pollination which . The pollination is done by hand, using male flowers collected from male palms and tied to the female inflorescences.
            </p>
          </div>
        </div>



      </div>

      <div className="explore">
        <h1 className='explore-title'>Keep exploring</h1>
        <div className="explore-cards">
          <Card sx={{ borderRadius: '16px' }} className='explore-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="150"
              image={img2}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                <span className='slogans'> About Figuig</span>
              </Typography>

            </CardContent>
            <hr />
            <CardActions>
              <Link to="/understand" className="link-without-underline"><span className='more'>Learn More ></span></Link>
            </CardActions>
          </Card>


          <Card sx={{ borderRadius: '16px' }} className='explore-card'>
            <CardMedia
              component="img"
              alt="green iguana"
              height="150"
              image={img3}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                <span className='slogans'> Hotels & Guest houses</span>
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
              image={img4}
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

export default Timetocome