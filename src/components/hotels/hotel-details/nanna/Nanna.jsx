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

import { Button } from '@mui/material';

import img1 from '../../../../assets/dar-nanna.jpg'
import img2 from '../../../../assets/la-maison-de-nanna2.jpg'
import img3 from '../../../../assets/la-maison-de-nanna-salon.jpg'
import img4 from '../../../../assets/la-maison-de-nanna-room.jpg'

import './nanna.css'

import Navbar from '../../../navbar/Navbar';
import Footer from '../../../footer/Footer';



const Nanna = () => {
    return (
        <div>
            <Navbar />

            <div className="heading">
                <div className="heading-title">
                    La maison de Nanna
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
                    <span>Rue Ouled Sellam Ksar Zénaga, Figuig 61000 Maroc</span>
                </div>

            </div>

            <div className="hotel-images">
                <div className="hotel-image">
                    <img src={img1} alt="" />
                </div>
                <div className="hotel-image">
                    <img src={img2} alt="" />
                </div>
                <div className="hotel-image">
                    <img src={img3} alt="" />
                </div>
                <div className="hotel-image">

                    <img src={img4} alt="" />
                </div>

            </div>

            <div className="location-info">

                <div className="left-info">
                    <div className="up-info">
                        <p className="info-title">Experience World-class Service</p>
                        <p className="info-text">Traditional house in the heart of the old ksar of Zenaga (medina)
                         built on two floors. Magnificent view of the panoramic terrace! Sunrise and sunset - sunbathing.
                            Family welcome, you can have your meals with family in the living room, or if you are numerous in the living room of the 1st floor.
                            All our rooms have en-suite bathrooms with hot water all year round.
                            The rooms in the upper part of the house are air-conditioned.
                            Your internet connection will be easy and free.
                            We can organize:
                            visits to the Oasis, various associations, historical sites, etc...
                            Hiking tours over several days in the region.</p>
                          <div className="prices">
                              <p className='price-title'>Prices :</p>
                              <ul className='price-lists'>
                                <li>Full package for one person: <span className='price-tag'> 450 MAD</span></li>
                                <li>Semi package for one person: <span className='price-tag'>350 MAD</span></li>
                                <li>One person for One night + Breakfast : <span className='price-tag'>250 MAD</span></li>
                                <li>Full package for a Couple: <span className='price-tag'>800 MAD</span></li>
                                <li>Semi package for a Couple: <span className='price-tag'>750 MAD</span></li>
                                <li>A Couple for One night + Breakfast : <span className='price-tag'>400 MAD</span></li>
                              </ul>
                          </div>
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
            <div className="ico1"><LocalParkingIcon/></div>
            <div className="ico2">Free parking</div>
            
        </li>
          <li className='align-icon'>
          <div className="ico1"><WifiIcon/></div>
          <div className="ico2"> Free High Speed Internet (WiFi)</div>
        </li>
          <li className='align-icon'>
          <div className="ico1">  <FreeBreakfastIcon/></div>
          <div className="ico2">    Free breakfast</div>
        </li>
          <li className='align-icon'>
          <div className="ico1">  <DirectionsBikeIcon/></div>
          <div className="ico2">  Bicycle rental</div>
        </li>
          <li className='align-icon'>
          <div className="ico1">   <HikingIcon/></div>
          <div className="ico2">   Hiking</div>
        </li>
          <li className='align-icon'>
          <div className="ico1"> <TvIcon/></div>
          <div className="ico2"> Children's television networks</div>
        </li>

          <li className='align-icon'>
          <div className="ico1"> <ChairAltIcon/></div>
          <div className="ico2"> Highchairs available</div>
        </li>
          <li className='align-icon'>
          <div className="ico1"> <PetsIcon/></div>
          <div className="ico2">    Pets Allowed ( Dog / Pet Friendly )</div>
        </li>
    </ul>
</div>

<div className="Room-features">
    <div className="property-title">Room features</div>
    <ul className='lists-properties'>
          <li className='align-icon'>
          <div className="ico1"><AcUnitIcon/></div>
          <div className="ico2">   Air conditioning</div>
        </li>
          <li className='align-icon'>
          <div className="ico1"> <KingBedIcon/></div>
          <div className="ico2">  Desk</div>
        </li>
          <li className='align-icon'>
          <div className="ico1"> <LockPersonIcon/></div>
          <div className="ico2"> Housekeeping</div>
        </li>
          <li className='align-icon'>
      <div className="ico1"> <ChairIcon/></div>
      <div className="ico2">Sofa</div>
        </li>
          <li className='align-icon'>
          <div className="ico1"> <BathroomOutlinedIcon/></div>
          <div className="ico2">   Private bathrooms</div>
        </li>
          <li className='align-icon'>
          <div className="ico1"> <CheckroomOutlinedIcon/></div>
          <div className="ico2"> Wardrobe / closet</div>
        </li>
       
    </ul>
</div>

<div className="Room-types">
    <div className="property-title">Room types</div>
    <ul className='lists-properties'>
          <li className='align-icon'>
          <div className="ico1">   <PanoramaOutlinedIcon/></div>
          <div className="ico2">  Mountain view</div>
        </li>
          <li className='align-icon'>
          <div className="ico1">   <HouseOutlinedIcon/></div>
          <div className="ico2"> City view</div>
        </li>
          <li className='align-icon'>
          <div className="ico1"> <PanoramaOutlinedIcon/></div>
          <div className="ico2">    Landmark view</div>
        </li>
          <li className='align-icon'>
          <div className="ico1">  <SmokeFreeOutlinedIcon/></div>
          <div className="ico2">  Non-smoking rooms</div>
        </li>
          <li className='align-icon'>
          <div className="ico1">  <BedroomParentOutlinedIcon/></div>
          <div className="ico2">  Suites</div>
        </li>
          <li className='align-icon'>
          <div className="ico1">   <BedroomParentOutlinedIcon/></div>
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
        </div>
    )
}

export default Nanna
