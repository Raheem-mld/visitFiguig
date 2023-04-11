import React from 'react'

import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

import img1 from '../../../assets/jardins-of-zenaga.jpg'
import img2 from '../../../assets/doundoun.jpg'

import './music.css'
const Music = () => {
    return (
        <>

            <div className='nav'>
                <Navbar />
            </div>

            <div className="Music-container">
                <h1 className='Music-title'>Music</h1>
                <img src={img1} alt="" className="Music-img" />
            </div>

            <div className='Music-section'>

                <h1 className="discover-title">Want to discover Figuig's music culture?</h1>
                <div className="Music-info">


                    <div className="img-text">
                        <div className="texts">
                            <p className="prgrph">
                                <span className='type-names'>Doundoun </span>  (Drum in english) is the most famous type of music in Figuig, Doundoun can be a one man show he needs
                                only a Drum which is a percussion musical instrument consisting of a drum on which are tensed one or more skins, struck with the fingers or chopsticks provided for this purpose.
                                The vibration thus obtained is amplified by the drum, which acts as a resonance chamber, sometimes modified by a steel
                                stamp or natural or synthetic casing. But all the time it's played by a band with anoyher instrument like Darbouka, the frame drum, the flute.  </p>
                        </div>
                        <div className="middle-img">
                            <img src={img2} alt="" />
                        </div>
                    </div>

                    <div className="img-text">
                        <div className="middle-img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="texts">
                            <p className="prgrph">
                                <span className='type-names'>Ourar</span> , its a women type of music it's always celebrated in Almawlid Anabaoui, the only instrument needes is the hands of the woman and one of them is leading the group and singing different songs and anthems.</p>

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

export default Music