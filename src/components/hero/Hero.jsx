import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Navigation, EffectFade, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import img1 from '../../assets/plane.png'
import img2 from '../../assets/sea.png'
import img3 from '../../assets/sky.png'

import './Hero.css'

import { Link } from 'react-router-dom';

const Hero = () => {
  return (

    <div className="container">

      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        navigation={true}
        effect={'fade'}
        speed={800}
        slidesPerView={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >

        <SwiperSlide className="swiperslide">
          <img src={img2} alt="" />
          <div className="content">
            <p className="title-content">Discover Figuig</p>
            <p className="slogan">For a unique travel experience, enjoy our Oasis.</p>
            <Link to="/understand" className="link-without-underline"><button className="btn-discover"><span className="span-disc">Discover more</span></button></Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiperslide">
          <img src={img1} alt=""/>
          <div className="content">
            <p className="title-content">Entartainments & activities</p>
            <p className="slogan">With a wide variety of art, music, theater,sports and events, there’s something for everyone during your journey.</p>
            <Link to="/do" className="link-without-underline"><button className="btn-discover"><span className="span-disc">Discover more</span></button></Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiperslide">
          <img src={img3} alt="" />
          <div className="content">
            <p className="title-content">Food Experience</p>
            <p className="slogan">With a wide variety of art, music, theater,sports and events, there’s something for everyone during your journey.</p>
            <Link to="/eat" className="link-without-underline"><button className="btn-discover"><span className="span-disc">Discover more</span></button></Link>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>


  )
}

export default Hero
