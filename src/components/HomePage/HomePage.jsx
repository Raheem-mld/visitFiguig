import React from 'react'

import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Info from '../informations/Info';
import Food from '../food/Food';
import Experience from '../experience/Experience';
import Footer from '../footer/Footer';

function HomePage() {
  return (
    <div className="HomePage">
      <Navbar />
      <Hero />
      <Info />
      <Food />
      <Experience />
      <Footer />
    </div>
  );
}

export default HomePage;
