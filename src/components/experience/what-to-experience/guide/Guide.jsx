import React from 'react'
import Navbar from '../../../navbar/Navbar'

import img1 from '../../../../assets/heritage1.jpg'

import img2 from '../../../../assets/patrimoine3.png'
import img3 from '../../../../assets/gravure.jpg'
import img4 from '../../../../assets/minaret2.jpg'
import img5 from '../../../../assets/old-men.jpg'

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import Footer from '../../../footer/Footer'
import './guide.css'

const Guide = () => {

    return (
        <>
            <div className='Guide-section'>
                <div className='nav'>
                    <Navbar />
                </div>

                <img
                    src={img1}
                    alt=""
                    className="Guide-img"
                />

                <h1 className='Guide-title'>Guide Tours</h1>

            </div>

            <div className="Guide-infos">

                <p className='prg-guide'>
                    Figuig is surrounded by
                    the Atlas Mountains and thousands of date palm trees.
                    It is a hidden gem that offers a glimpse of the rich and
                    diverse cultures of the desert regions. <br></br>If you want to explore
                    Figuig and its surroundings, you can join one of the guide tours
                    offered by local experts who know the area well and can show you
                    the best attractions and activities.
                </p>

                <div className="Guide-info">
                    <div className='left-info'>

                        <p className='safe-title'>History Tour</p>
                        <p className='safe-sloagan'>
                            Figuig, as we all know is on the tentative list of UNESCO World Heritage Sites and has
                            been recognized by various organizations for its cultural and natural value.<br></br>
                            This tour lets you explore its archaeological heritage center, where
                            you can discover the ancient and diverse history and culture of the oasis and its inhabitants.
                        </p>
                        <div className='button-guide'>
                            <Link to="/" className="link-without-underline">
                                <Button variant="contained" className='btn-guide' style={{ backgroundColor: 'rgb(29, 121, 91)' }}>Book Your Tour Now !</Button>
                            </Link>
                        </div>
                    </div>

                    <div className='right-info'>
                        <img src={img2} alt="" />
                    </div>
                </div>

                <div className="Guide-info">
                    <div className='left-info'>
                        <img src={img3} alt="" />
                    </div>
                    <div className='right-info'>
                        <p className='safe-title'>Biologist Adventure</p>
                        <p className='safe-sloagan'>
                        About 70 km from Figuig on the track of Iche, in the oued Douissa Chellala,  
                         on a large slab some spectacular engravings. 
                         These are probably some of the most beautiful rock carvings in 
                         southern Morocco, by the themes and the quality of the deep hollow 
                         line well polished: a bovine “coiffed”, a small rhinoceros, a gazelle,
                          a very enigmatic set from which one can extrapolate a bird’s head embedded in another
                         engraving to be determined. The whole is engraved with a deep line and of exceptional beauty.
                        </p>
                        <div className='button-guide'>
                            <Link to="/" className="link-without-underline">
                                <Button variant="contained" className='btn-guide' style={{ backgroundColor: 'rgb(29, 121, 91)' }}>Book Your Tour Now !</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="Guide-info">
                    <div className='left-info'>
                        <p className='safe-title'>Monuments Tour</p>
                        <p className='safe-sloagan'>
                        This is a tour that takes you to see all the historical monuments in Figuig, 
                        such as the Stone Minaret, a 12th-century tower that is the oldest monument in the town;
                         Ajdir, a ksar (fortified district) that was the seat of the local resistance against the
                          French colonization; 
                           the old medina, the historic center of Figuig that contains many traditional houses, 
                           mosques, and mausoleums; Tzadart,
                         and Lajmaat, etc...
                        </p>

                        <div className='button-guide'>
                            <Link to="/" className="link-without-underline">
                                <Button variant="contained" className='btn-guide' style={{ backgroundColor: 'rgb(29, 121, 91)' }}>Book Your Tour Now !</Button>
                            </Link>
                        </div>
                    </div>

                    <div className='right-info'>
                        <img src={img4} alt="" />
                    </div>
                </div>

                <div className="Guide-info">
                    <div className='left-info'>
                        <img src={img5} alt="" />
                    </div>
                    <div className='right-info'>
                        <p className='safe-title'>Local Tour</p>
                        <p className='safe-sloagan'>
                        This tour will take you to the old medina, where you can discover the ancient architecture
                         of the houses and wandering through those narrow alleys, 
                        as well as the scenic landscape of the trees.</p>

                             <div className='button-guide'>
                            <Link to="/" className="link-without-underline">
                                <Button variant="contained" className='btn-guide' style={{ backgroundColor: 'rgb(29, 121, 91)' }}>Book Your Tour Now !</Button>
                            </Link>
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

export default Guide