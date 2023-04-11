import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import img1 from '../../assets/women-with-hayek.jpg'
import img2 from '../../assets/church.jpg'
import img3 from '../../assets/riyad-zenaga-inside.jpg'
import img4 from '../../assets/bike.jpg'

import { Link } from 'react-router-dom';

import './Info.css'


const Info = () => {
    return (
        <div className='info'>
            <h1 className='Info-title'>know Before You Go</h1>

            <div className="Cards">
             
                    <Card sx={{borderRadius: '16px'}} className='Card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={img1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                                <span className='slogans'>About Figuig</span>
                            </Typography>
                        
                        </CardContent>
                        <hr/>
                        <CardActions>
                            <Link to="/understand" className="link-without-underline"><span  className='more'>Learn More ></span></Link>
                        </CardActions>
                    </Card>
               

                    <Card sx={{borderRadius: '16px'}} className='Card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={img2}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                            <span className='slogans'> Safety travel tips</span>
                            </Typography>
                           
                        </CardContent>
                        <hr/>
                        <CardActions>
                        <Link to="/travel-safety-tips" className="link-without-underline"><span  className='more'>Learn More ></span></Link>
                        </CardActions>
                    </Card>

                    
                    <Card sx={{borderRadius: '16px'}} className='Card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={img3}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                            <span className='slogans'> Hostels & Guest houses</span>
                            </Typography>
                            
                        </CardContent>
                        <hr/>
                        <CardActions>
                        <Link to="/hotels" className="link-without-underline"><span  className='more'>Learn More ></span></Link>
                        </CardActions>
                    </Card>

                    
                    <Card sx={{borderRadius: '16px'}} className='Card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={img4}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='info-slogan'>
                            <span className='slogans'> Transportation</span>
                            </Typography>
                        
                        </CardContent>
                        <hr/>
                        <CardActions>
                        <Link to="/transportation" className="link-without-underline"><span  className='more'>Learn More ></span></Link>
                        </CardActions>
                    </Card>

            </div>
        </div>
    )
}

export default Info
