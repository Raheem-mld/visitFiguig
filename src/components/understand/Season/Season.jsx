import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import img1 from '../../../assets/jardins-of-zenaga.jpg'
import img2 from '../../../assets/poolikoudass.jpg'
import img3 from '../../../assets/azrou.jpg'
import img4 from '../../../assets/grape.jpg'


import './Season.css'

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

export default function Season() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingLeft: 10 }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Spring" {...a11yProps(0)} />
          <Tab label="Summer" {...a11yProps(1)} />
          <Tab label="Autumn" {...a11yProps(2)} />
          <Tab label="Winter" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>

            <div className="season-cards">
              <div className='season-card'>
                <p className='season-title'>Spring</p>
                <p className='season-text'>
                Average High : 25°C <br></br>
                Average Low : 13°C
              </p>
              </div>

              <div  className="season-img">
                <img
                src={img1}
                alt=""             
                />
              </div>
            </div>
    
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="season-cards">
              <div className='season-card'>
                <p className='season-title'>Summer</p>
                <p className='season-text'>
                Average High : 39°C<br></br>
                Average Low : 27°C
              </p>
              </div>

              <div  className="season-img">
                <img
                src={img2}
                alt=""             
                />
              </div>
            </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="season-cards">
              <div className='season-card'>
                <p className='season-title'>Autumn</p>
                <p className='season-text'>
                Average High : 	26°C<br></br>
                Average Low : 	16°C
           </p>
              </div>

              <div  className="season-img">
                <img
                src={img3}
                alt=""             
                />
              </div>
            </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="season-cards">
              <div className='season-card'>
                <p className='season-title'>Winter</p>
                <p className='season-text'>
                Average High : 15°C<br></br>
                Average Low : 4°C
           </p>
              </div>

              <div  className="season-img">
                <img
                src={img4}
                alt=""             
                />
              </div>
            </div>
      </TabPanel>
    </Box>
  );
}