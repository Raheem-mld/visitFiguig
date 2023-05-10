import React from 'react'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import WifiIcon from '@mui/icons-material/Wifi';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import HikingIcon from '@mui/icons-material/Hiking';
import TvIcon from '@mui/icons-material/Tv';
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import PetsIcon from '@mui/icons-material/Pets';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import KingBedIcon from '@mui/icons-material/KingBed';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import ChairIcon from '@mui/icons-material/Chair';
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import SmokeFreeOutlinedIcon from '@mui/icons-material/SmokeFreeOutlined';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import img1 from '../../../../assets/riyad-zenaga-inside.jpg'
import img2 from '../../../../assets/riyad-zen-bedroom.jpg'
import img3 from '../../../../assets/tapis2.jpg'
import img4 from '../../../../assets/mosque.jpg'

import './Zenaga.css'

import Navbar from '../../../navbar/Navbar';
import Footer from '../../../footer/Footer';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Zenaga = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Navbar />

      <div className="heading">
        <div className="heading-title">
          Riyad Zenaga
        </div>
        <div className="heading-reserve">
          <Button variant="contained" className='btn-reserve'>Reserve or Book Now !</Button>
        </div>
      </div>

      <div className="location">
        <div className="icon-location">
          <LocationOnIcon />
        </div>
        <div className="slogan-location">
          <Button onClick={handleOpen}><span className='location-text'>Rue Hammadi Abdelkafi Zenaga, Figuig 61000 Maroc</span></Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.8483342659188!2d-1.239777484297548!3d32.1003844741245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd85d8c20628e045%3A0xb3f5811daa1b6894!2sRiyad%20Zenaga!5e0!3m2!1sfr!2sma!4v1680879751617!5m2!1sfr!2sma"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>


            </Box>
          </Modal>
        </div>

      </div>

      <div className="container-images">

        <Swiper
          modules={[EffectFade, Navigation, Pagination, Autoplay]}

          effect={'fade'}
          speed={800}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >

          <SwiperSlide className="swiperslide">
            <img src={img1} alt="" />
          </SwiperSlide>

          <SwiperSlide className="swiperslide">
            <img src={img2} alt="" />
          </SwiperSlide>

          <SwiperSlide className="swiperslide">
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <img src={img4} alt="" />
          </SwiperSlide>

        </Swiper>

      </div>

      <div className="location-info">

        <div className="left-info">
          <div className="up-info">
            <p className="info-title">Experience World-class Service</p>
            <p className="info-text">Traditional house in the heart of the old ksar of Zenaga (medina) built on two floors. Magnificent view of the panoramic terrace! Sunrise and sunset - sunbathing.
              Family welcome, you can have your meals with family in the living room, or if you are numerous in the living room of the 1st floor.
              All our rooms have en-suite bathrooms with hot water all year round.
              The rooms in the upper part of the house are air-conditioned.
              Your internet connection will be easy and free.
              We can organize:
              visits to the Oasis, various associations, historical sites, etc...
              Hiking tours over several days in the region.</p>
          </div>

          <div className="down-info">
            <p>Perfect for a summer vacation</p>
            <p>Located in the old medina of the Oasis, you will see an amazing ancient architecture of houses around. </p>
            <Button variant="contained" className='btn-reserve'>Reserve or Book Now !</Button>
          </div>
        </div>

        <div className="right-info">

          <div className="property-amenties">
            <div className="property-title">Property amenities</div>
            <ul className='lists-properties'>
              <li className='align-icon'>
                <div className="ico1"><LocalParkingIcon /></div>
                <div className="ico2">Free parking</div>

              </li>
              <li className='align-icon'>
                <div className="ico1"><WifiIcon /></div>
                <div className="ico2"> Free High Speed Internet (WiFi)</div>
              </li>
              <li className='align-icon'>
                <div className="ico1">  <FreeBreakfastIcon /></div>
                <div className="ico2">    Free breakfast</div>
              </li>
              <li className='align-icon'>
                <div className="ico1">  <DirectionsBikeIcon /></div>
                <div className="ico2">  Bicycle rental</div>
              </li>
              <li className='align-icon'>
                <div className="ico1">   <HikingIcon /></div>
                <div className="ico2">   Hiking</div>
              </li>
              <li className='align-icon'>
                <div className="ico1"> <TvIcon /></div>
                <div className="ico2"> Children's television networks</div>
              </li>

              <li className='align-icon'>
                <div className="ico1"> <ChairAltIcon /></div>
                <div className="ico2"> Highchairs available</div>
              </li>
              <li className='align-icon'>
                <div className="ico1"> <PetsIcon /></div>
                <div className="ico2">    Pets Allowed ( Dog / Pet Friendly )</div>
              </li>
            </ul>
          </div>

          <div className="Room-features">
            <div className="property-title">Room features</div>
            <ul className='lists-properties'>
              <li className='align-icon'>
                <div className="ico1"><AcUnitIcon /></div>
                <div className="ico2">   Air conditioning</div>
              </li>
              <li className='align-icon'>
                <div className="ico1"> <KingBedIcon /></div>
                <div className="ico2">  Desk</div>
              </li>
              <li className='align-icon'>
                <div className="ico1"> <LockPersonIcon /></div>
                <div className="ico2"> Housekeeping</div>
              </li>
              <li className='align-icon'>
                <div className="ico1"> <ChairIcon /></div>
                <div className="ico2">Sofa</div>
              </li>
              <li className='align-icon'>
                <div className="ico1"> <BathroomOutlinedIcon /></div>
                <div className="ico2">   Private bathrooms</div>
              </li>
              <li className='align-icon'>
                <div className="ico1"> <CheckroomOutlinedIcon /></div>
                <div className="ico2"> Wardrobe / closet</div>
              </li>

            </ul>
          </div>

          <div className="Room-types">
            <div className="property-title">Room types</div>
            <ul className='lists-properties'>
              <li className='align-icon'>
                <div className="ico1">   <PanoramaOutlinedIcon /></div>
                <div className="ico2">  Mountain view</div>
              </li>
              <li className='align-icon'>
                <div className="ico1">   <HouseOutlinedIcon /></div>
                <div className="ico2"> City view</div>
              </li>
              <li className='align-icon'>
                <div className="ico1"> <PanoramaOutlinedIcon /></div>
                <div className="ico2">    Landmark view</div>
              </li>
              <li className='align-icon'>
                <div className="ico1">  <SmokeFreeOutlinedIcon /></div>
                <div className="ico2">  Non-smoking rooms</div>
              </li>
              <li className='align-icon'>
                <div className="ico1">  <BedroomParentOutlinedIcon /></div>
                <div className="ico2">  Suites</div>
              </li>
              <li className='align-icon'>
                <div className="ico1">   <BedroomParentOutlinedIcon /></div>
                <div className="ico2">  Family rooms</div>
              </li>

            </ul>
          </div>

          <div className="good-to-know">
            <div className="property-title">Good to know</div>
            <div className="sides">
              <div className="leftside">
                <p>HOTEL STYLE</p>
                <p>Family</p>
              </div>

              <div className="rightside">
                <p>Languages Spoken</p>
                <p>Arabic, English, French</p>
              </div>
            </div>
          </div>

        </div>



      </div>

      <Footer />
    </div >
  )
}

export default Zenaga
