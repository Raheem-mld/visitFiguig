import React from 'react'

import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

import img1 from '../../../assets/jardins-of-zenaga.jpg'
import img2 from '../../../assets/aztta.jpg'
import img3 from '../../../assets/a9rdach.jpg'
import img4 from '../../../assets/imachdan.jpg'
import img5 from '../../../assets/tajdja.jpg'

import './handicraft.css'
const Handicraft = () => {
    return (
        <>

            <div className='nav'>
                <Navbar />
            </div>

            <div className="Handicraft-container">
                <h1 className='Handicraft-title'>Handicraft</h1>
                <img src={img1} alt="" className="Handicraft-img" />
            </div>

            <div className='Handicraft-section'>

                <h1 className="discover-title">Want to discover Figuig's Handicraft culture?</h1>
                <div className="Handicraft-info">


                    <div className="img-text">
                        <div className="texts">
                            <p className="prgrph-handicraft">
                                <span className='type-names'>Aztta </span>
                                Figuig traditional textiles have a long and rich history on the eastern side of the country. The eastern region of Morocco, known as the Oriental region, is home to
                                many traditional textile techniques and styles that are unique to the area.

                                One of the most notable textiles from Figuig is the Taznakht rug. These rugs are handwoven by the Berber tribes of the Taznakht region, using wool from local sheep. They are known for their intricate patterns and bright colors, often featuring diamond shapes or other geometric motifs.
                                The region is also known for its traditional clothing, which includes the Djellaba robe, often made from wool or cotton, and decorated with intricate embroidery or woven patterns. The region also produces traditional slippers known as babouches, which are made from leather and often embroidered or decorated with sequins or other embellishments.</p>
                       

                        </div>
                        <div className="middle-img">
                            <img src={img2} alt="" />
                        </div>
                    </div>

                    <p className='tools-tile'>Tools for Azztta :</p>

                    <div className="img-text">
                        <div className="middle-img">
                            <img src={img3} alt="" />
                        </div>
                        <div className="texts1">
                            <p className="prgrph">
                              Louh or Akrdach 
                              </p>
                        </div>

                    </div>

                    <div className="img-text">
                        
                        <div className="texts2">
                            <p className="prgrph">
                              Imachdan
                              </p>
                        </div>

                        <div className="middle-img">
                            <img src={img4} alt="" />
                        </div>

                    </div>

                    <div className="img-text">
                        <div className="middle-img">
                            <img src={img5} alt="" />
                        </div>
                        <div className="texts1">
                            <p className="prgrph">
                              Tajdja
                              </p>
                        </div>

                    </div>

                </div>
            </div>

            <div>
                <Footer />
            </div>

        </>
    )
}

export default Handicraft