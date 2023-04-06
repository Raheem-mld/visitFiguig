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
                            height="250"
                            image={img1}
                        
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='Experience-slogan'>
                                Tour with Bikes
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" className='Experience-texts'>
                            <span className='texts'>Starting from</span>
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" className='Experience-texts'>
                                <span className='price'>200 MAD</span>
                            </Typography>
                        
                        </CardContent>
                        <hr/>
                        <CardActions>
                            <Button size="small"><span  className='book-btn'>Book Now ></span></Button>
                        </CardActions>
                    </Card>
               

                    <Card sx={{ borderRadius: '16px' }}  className='Card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="250"
                            image={img2}
                       
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='Experience-slogan'>
                                Date harvest season
                            </Typography>
                           
                            <Typography gutterBottom variant="h6" component="div" className='Experience-texts'>
                            <span className='texts'>Starting from</span>
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" className='Experience-texts'>
                            <span className='price'>200 MAD</span>
                            </Typography>
                        
                        </CardContent>
                        <hr/>
                        <CardActions>
                            <Button size="small"><span  className='book-btn'>Book Now ></span></Button>
                        </CardActions>
                    </Card>

                    
                    <Card sx={{ borderRadius: '16px' }}  className='Card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="250"
                            image={img3}
                          
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='Experience-slogan'>
                              Akbouch Festival
                            </Typography>
                            
                        
                            <Typography gutterBottom variant="h6" component="div" className='Experience-texts'>
                            <span className='texts'>Starting from</span>
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" className='Experience-texts'>
                            <span className='price'>200 MAD</span>
                            </Typography>
                        
                        </CardContent>
                        <hr/>
                        <CardActions>
                            <Button size="small"><span  className='book-btn'>Book Now ></span></Button>
                        </CardActions>
                    </Card>

                    
                    <Card sx={{ borderRadius: '16px' }}  className='Card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="250"
                            image={img4}
                            
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='Experience-slogan'>
                                Do hikings
                            </Typography>
                        
                        
                            <Typography gutterBottom variant="h6" component="div" className='Experience-texts'>
                                <span className='texts'>Starting from</span>
                            </Typography>

                            <Typography gutterBottom variant="h6" component="div" className='Experience-texts'>
                            <span className='price'>200 MAD</span>
                            </Typography>
                        
                        </CardContent>
                        <hr/>
                        <CardActions>
                            <Button size="small"><span  className='book-btn'>Book Now ></span></Button>
                        </CardActions>
                    </Card>

            </div>
        </div>
    )
}

export default Experience
