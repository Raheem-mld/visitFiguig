import React from 'react'
import img1 from '../../../assets/wild-view.jpg'
import img2 from '../../../assets/women-with-hayek.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Currency.css'

import Footer from '../../footer/Footer'

const Currency = () => {
  return (
    <div>
      <div className='currency-content'>

        <h1 className='currency-title'>Currency & Payments</h1>

        <div className='currency-box'>

          <div className="first-box">
            <div className="currency-img">
              <img
                src={img1}
                alt=""
              />
            </div>

            <div className='currency-texts'>
              <p className='currency-slogan'>Exchange and transactions</p>
              <p className='currency-text'>
                The currency used in Morocco is the Moroccan dirham (MAD).<br></br>
                The Moroccan dirham is divided into 100 smaller units called centimes.<br></br>
                Banknotes come in denominations of 20, 50, 100, and 200 dirhams, <br></br>while coins come in denominations of 1, 2, 5, and 10 dirhams, <br></br>as well as 5, 10, and 20 centimes.<br></br>
                It's recommended to exchange your money at a bank <br></br>or official bureau de change rather than on the street,<br></br> to ensure you receive the official exchange rate.<br></br>
                Some hotels and restaurants may accept payment in <br></br>euros or US dollars, but it's best to have<br></br> dirhams on hand for most transactions.<br></br>
                Credit cards are widely accepted in larger cities and <br></br>tourist areas, but you may encounter places that only accept<br></br> cash, especially in more rural areas.
              </p>
            </div>
          </div>


        </div>

        <div className="currency-cards">
          <div className="currency-card">
            <div className="curr-title">
              Currency Exchange
            </div>
            <div className="curr-body">
              All banks in Figuig offer currency exchange services.
              Exchange bureaus are located at airports.
              Credit card, such as Visa, MasterCard are accepted throughout the Oasis.
            </div>
          </div>

          <div className="currency-card">
            <div className="curr-title">
              Send and receive money
            </div>
            <div className="curr-body">
              You can receive money in Figuig by transferring funds online like in Sendwave application, or in Wafacach or even through a
              bank that offers fast money transfer services.
            </div>
          </div>

          <div className="currency-card">
            <div className="curr-title">
              Taxes
            </div>
            <div className="curr-body">
              Hotels and Riads imposes an indirect tax between 15 MAD and 60 MAD per person. There are some exceptions.
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
                  <span className='slogans'> Safety travel tips</span>
                </Typography>

              </CardContent>
              <hr />
              <CardActions>
                <Link to="/travel-safety-tips" className="link-without-underline"><span className='btn-learnmore'>Learn More ></span></Link>
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
                  <span className='slogans'> Hotels </span>
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

       

      </div>
      <div>
          <Footer />
        </div>
    </div>
  )
}

export default Currency
