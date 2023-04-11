import React from 'react'

import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

import img1 from '../../assets/view-fro-jorf-towards.jpg'
import img2 from '../../assets/minaret.jpg'

import './presentation.css'
const Presentation = () => {
    return (
        <>

            <div className='nav'>
                <Navbar />
            </div>

            <div className="presentation-container">
                <h1 className='presentation-title'>Figuig. a city-oasis, core of ksour and cultures </h1>
                <img src={img1} alt="" className="presentation-img" />
            </div>

            <div className='presentation-section'>

                <h1 className="discover-title">Want to discover Figuig?</h1>
                <div className="presentation-info">
                    <p className="prgrph">
                        There are a thousand and one ways to live it. The very historic city known everywhere because it still keeps its ancestral traces of construction, it consists of seven Ksours.</p>
                    <p className="prgrph">
                        The Oasis of Figuig is an extremely old city with a long history. Its geographical location has made it a
                        particularly ecological oasis with a tight population. Hot springs, underground or in the open air, are used for
                        bathing or irrigation of palm trees. There are about 200,000 date palms. It’s easy to see the canopy that looks like a giant green sea from the top of the jorf.</p>
                   
                    <div className="img-text">
                        <div className="texts">
                        <p className="prgrph">
                        The Ksurians are welcoming and helpful. no need for a caretaker for your car, the confidence is absolute, and you can walk
                        in the alleys of ksours, or watch live fish or frogs in the large pools where children will play during the summer.</p>
                            <p className="prgrph">
                                The surroundings of Figuig will make you lose your voice, open your eyes and make you happy.</p>
                            <p className="prgrph">
                                The entire city is considered a national heritage in its Ksarian aspect.</p>
                                <p className="prgrph">
                        The palm city is nestled in the heart of a circle of small mountains that form a sort of corolla of flowers all around it
                        in the far east of Morocco at the junction between the highlands and the northern Sahara, some 368 km south of Oujda and 7 km
                        from the Algerian city of Beni Ounif with a population of 12,516.</p>
                        </div>
                        <div className="middle-img">
                            <img src={img2} alt="" />
                        </div>
                    </div>

                    <p className="prgrph">
                        The city therefore abounds from beyond its beautiful landscape a superb city to see such as that of
                        Sawmaa hajaria, this monument is located in the Ksar of Loudaghir, it was beaten in the 6th century of the Hegira with a height of 19 m.</p>
                    <p className="prgrph">
                        It has a square base and from 5 m from its base it begins to become octagonal.</p>
                    <p className="prgrph">
                        There are also the Ksour of which the Ksar Zenaga is the last, it is the largest and the most beautiful of all the ksour of Figuig, it covers half of the city.
                        And the other Ksour are Laâbidate, Loudaghir, Ouled Slimane, Lamaïz, Hammam Foukani and Hammam Tahtani.</p>
                    <p className="prgrph">
                        In the vicinity, one can enjoy a beautiful panoramic view embracing both the fortress, the palm grove and the Zenaga mountain in the background.</p>
                </div>
            </div>

            <div>
                <Footer />
            </div>

        </>
    )
}

export default Presentation