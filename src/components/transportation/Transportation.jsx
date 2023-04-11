import React from 'react'
import Navbar from '../navbar/Navbar'
import img2 from '../../assets/plane.png'
import img1 from '../../assets/palmpool.jpg'

import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import TrainIcon from '@mui/icons-material/Train';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DriveEtaIcon from '@mui/icons-material/DriveEta';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Footer from '../footer/Footer'
import './Transportation.css'
import Modes from './Modes-transport/Modes';

const Transportation = () => {

    return (
        <>
            <div className='Transportation-section'>
                <div className='nav'>
                    <Navbar />
                </div>

                <img
                    src={img1}
                    alt=""
                    className="Transportation-img"
                />

                <h1 className='Transportation-title'>Transportation</h1>


                <div className="bookcard">
                    <div className="book-box">
                        <div className="book-img">
                            <img
                                src={img2}
                                alt=""

                            />
                        </div>

                        <div className='book-texts'>
                            <p className='book-title'>Book your flight and hotel</p>
                            <p className='book-text'>
                                There are dozens of major airports and airlines that can
                                give you access to almost every part of Morooco, but The closest airports to Figuig is located in Bouarafa 110 km from the oasis.
                                Figuig’s hostels and guest houses are plentiful and marked by superior hospitality.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="transport-ways">
                    <h1 className='trans-head'>How to arrive to Figuig </h1>
                    <div className="transport-cards">
                        <div className="transport-card">
                            <div className="trans-title">
                                <DirectionsCarIcon />
                                <span className='span-title'> Personal car</span>
                            </div>
                            <div className="trans-body">
                                You can arrive with your personal car and you should just follow th map it's an easy road.
                            </div>
                        </div>

                        <div className="transport-card">
                            <div className="trans-title">
                                <LocalAirportIcon />
                                <span className='span-title'> Flight </span>
                            </div>
                            <div className="trans-body">
                                To arrive to Figuig the nearest Airport is Bouarfa International Airport, then you will have to take 110 km by Bus.
                            </div>
                        </div>

                        <div className="transport-card">
                            <div className="trans-title">
                                <DirectionsBusIcon />
                                <span className='span-title'>Bus</span>
                            </div>
                            <div className="trans-body">
                                You can take a Bus from all over Morocco then you are going to switch to another Bus in Oujda or Bouarafa, then you will continue to the Oasis.
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modes">
                    <div className="modes-title">Modes of transport inside Figuig</div>
                    <Modes />
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
                                <span className='slogans'> Hostels & Guest houses</span>
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
                                <span className='slogans'> Safety travel tips</span>
                            </Typography>

                        </CardContent>
                        <hr />
                        <CardActions>
                            <Link to="/travel-safety-tips" className="link-without-underline"><span className='btn-learnmore'>Learn More ></span></Link>
                        </CardActions>
                    </Card>

                </div>
            </div>

            <Footer />
        </>


    )
}

export default Transportation