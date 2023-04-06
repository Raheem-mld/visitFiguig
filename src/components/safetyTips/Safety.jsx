import React from 'react'
import Navbar from '../navbar/Navbar'
import img1 from '../../assets/plane.png'
import img2 from '../../assets/women-with-hayek.jpg'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Footer from '../footer/Footer'
import './Safety.css'

const Safety = () => {

  return (
    <>
    <div className='Safety-section'>
      <div className='nav'>
        <Navbar />
      </div>
      
      <img
        src={img1}
        alt=""
        className="Safety-img"
      />

      <h1 className='Safety-title'>Safety travel tips</h1>

    </div>

    <div className="Safety-infos">
        <div className="Safety-info">
            <p className='safe-title'>Travel advice</p>
            <p className='safe-sloagan'>With global recovery on the horizon, keen traveler's worldwide are planning their next trip. Across Figuig, hotels, 
                restaurants and tourism attractions are taking concrete steps to reopen safely, with new protocols designed
                 to ensure the health of all visitors traveling to, and within, the Oasis. Tourists can also play their part,
                  by staying up to speed on the latest health and travel advice, and by taking practical precautions. 
                So whether you’re planning a luxury staycation, or a cross-country road trip, here are some tips to ensure 
                your next adventure is exciting, enjoyable and stress-free.</p>
        </div>

        <div className="Safety-info">
            <p className='safe-title'>Take charge of your well-being</p>
            <p className='safe-sloagan'>Be responsible for your health. Make 
            sure you feel well before setting off, and do not travel if you don’t.
             If you begin to experience symptoms of Covid-19, such as a mild cough, 
             fever or shortness of breath, isolate at home and seek medical advice. 
             Ahead of traveling, ensure your health insurance is current and be prepared
              for any healthcare emergencies by carrying essential contact numbers, along with details of your policy. 
            In the event you do end up having to rearrange your plans, travel insurance can
             help to protect your investment. Consider taking out a policy before you depart, to allow for any changes in health advice or social distancing laws. </p>
        </div>

        <div className="Safety-info">
            <p className='safe-title'>Hygiene first</p>
            <p className='safe-sloagan'>The simplest way to stay safe and protect those around you is through good hygiene. When traveling, wash your hands thoroughly and regularly, and avoid touching your nose and mouth. Carry hand sanitizer and disinfecting wipes when out and about, particularly in more remote or rural locations, and apply regularly. Remember to pack facemasks and gloves to wear, as required, and dispose of them carefully after use.
             Keep a safe distance from others in public places -– a two meter or six foot gap is recommended – and use contactless payment options, such as cards, where you can.</p>
        </div>

        <div className="Safety-info">
            <p className='safe-title'>In transit</p>
            <p className='safe-sloagan'>If you’ve got a short-hop flight across Morocco, or you’re planning to take the boat, arrive early.
             Thanks to new safety measures, such as temperature scans and social distancing, queues may be longer and move more slowly.
              Where you can, use online check-in facilities, and allow yourself enough time to pass through security screening and board smoothly.
               Be aware that there may also be new limits around hand luggage,
             so make sure to check this with your carrier ahead of your flight. Staff will be on hand to support, with answers to any questions you may have.</p>
        </div>

        <div className="Safety-info">
            <p className='safe-title'>Eating out  </p>
            <p className='safe-sloagan'>As restaurants, cafés and other eateries resume dine-in services, they are also ramping up sanitization procedures to ensure they are ready to welcome patrons. New rules will set limits to the number of diners admitted at any one time, and extra space between tables in support of social distancing guidelines is mandatory. 
            Disposable cutlery and crockery is also being used for increased safety. All measures are designed to ensure guests are safe and comfortable. </p>
        </div>

        <div className="Safety-info">
            <p className='safe-title'>Get Outside</p>
            <p className='safe-sloagan'>Skip the crowds by exploring some of the fantastic outdoor adventures Figuig has to offer.
             Whether that’s picnicking in the mountains, there’s no better way to experience Figuig's
             diverse and beautiful Nature. Connect with a tour guide to build a bespoke itinerary, and for reassurance from experts on the best places to visit. </p>
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
                <Link to="/understand" className="link-without-underline"><span className='btn-learnmore'>Learn More ></span></Link>
              </CardActions>
            </Card>


            <Card sx={{ borderRadius: '16px' }} className='explore-card'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={img2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                  <span className='slogans'> Hotels</span>
                </Typography>

              </CardContent>
              <hr />
              <CardActions>
                <Link to="/hotels" className="link-without-underline"><span className='btn-learnmore'>Learn More ></span></Link>
              </CardActions>
            </Card>


            <Card sx={{ borderRadius: '16px' }} className='explore-card'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={img2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                  <span className='slogans'> Transportation & Flight</span>
                </Typography>

              </CardContent>
              <hr />
              <CardActions>
                <Link to="/transportation" className="link-without-underline"><span className='btn-learnmore'>Learn More ></span></Link>
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
  
  export default Safety