import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import img1 from '../../assets/bike.jpg'
import img2 from '../../assets/Saison-récolte-dattes.jpg'
import img3 from '../../assets/pool-ikoudass.jpg'
import img4 from '../../assets/general-view.jpg'

import { Link } from 'react-router-dom';

import './Experience.css'

const Experience = () => {
    return (
        <div className='Experience'>
            <h1 className='Experience-title'>What to Experience</h1>

            <div className="Cards">
             
                    <Card sx={{borderRadius: '16px'}} className='Card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={img1}
                        
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" >
                               <span className='Experience-slogan'>Tour with Bikes</span> 
                            </Typography>
                        
                        </CardContent>
                        <hr/>
                        <CardActions>
                           <Link to="/transportation" className="link-without-underline"><span  className='more'>Learn More ></span></Link>
                        </CardActions>
                    </Card>
               

                    <Card sx={{ borderRadius: '16px' }}  className='Card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={img2}
                       
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='Experience-slogan'>
                            <span className='Experience-slogan'> Date harvest season</span> 
                            </Typography>
                        
                        
                        </CardContent>
                        <hr/>
                        <CardActions>
                           <Link to="/transportation" className="link-without-underline"><span  className='more'>Learn More ></span></Link>
                        </CardActions>
                    </Card>

                    
                    <Card sx={{ borderRadius: '16px' }}  className='Card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={img3}
                          
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='Experience-slogan'>
                            <span className='Experience-slogan'>Akbouch Festival</span> 
                            </Typography>
                            
                        
                        </CardContent>
                        <hr/>
                        <CardActions>
                           <Link to="/transportation" className="link-without-underline"><span  className='more'>Learn More ></span></Link>
                        </CardActions>
                    </Card>

                    
                    <Card sx={{ borderRadius: '16px' }}  className='Card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={img4}
                            
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='Experience-slogan'>
                            <span className='Experience-slogan'> Do hikings</span> 
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

export default Experience
