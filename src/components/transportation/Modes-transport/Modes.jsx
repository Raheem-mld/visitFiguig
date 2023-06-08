import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/bike4.jpg'
import img2 from '../../../assets/taxi.jpg'
import img3 from '../../../assets/women-with-hayek.jpg'

import './modes.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Modes() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingLeft: 10 }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Bike rentals" {...a11yProps(0)} />
          <Tab label="Taxis" {...a11yProps(1)} />
          <Tab label="Walking" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>

            <div className="modes-cards">
              <div className='modes-card'>
                <p className='modes-title'>Bike rentals</p>
                <p className='modes-text'>
                Renting a bike is an efficient and cost-effective way to explore Figuig 
                and visit the oasis's many tourist attractions. Bikes can be rented at associations, making it easy to get out and explore.
                </p>
           
                <div className='button-rent'>
                <Link to="/understand" className="link-without-underline">
                   <Button variant="contained" className='btn-rent' style={{ backgroundColor: 'rgb(119, 13, 13)' }}>Rent a Bike Now !</Button>
                </Link>
                </div>

               
              </div>

              <div  className="modes-img">
                <img
                src={img1}
                alt=""             
                />
              </div>
            </div>
    
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="modes-cards">
              <div className='modes-card'>
                <p className='modes-title'>Taxis</p>
                <p className='modes-text'>
                Taking a taxi is a way to move in Figuig 
                and visit the oasis's far tourist attractions, making it easy to get out and explore.
                </p>
              </div>

              <div  className="modes-img">
                <img
                src={img2}
                alt=""             
                />
              </div>
            </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="modes-cards">
              <div className='modes-card'>
                <p className='modes-title'>Walking</p>
                <p className='modes-text'>
                Hiking or taking walks it's the best idea and experience you can take in Figuig, especially between the streets of the old medina.
                </p>
              </div>

              <div  className="modes-img">
                <img
                src={img3}
                alt=""             
                />
              </div>
            </div>
      </TabPanel>

    </Box>
  );
}