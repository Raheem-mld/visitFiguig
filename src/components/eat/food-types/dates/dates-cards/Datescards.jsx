import React from 'react';

import './datescards.css';

import img1 from '../../../../../assets/aziza1.jpg'
import img2 from '../../../../../assets/aziza2.jpg'
import img3 from '../../../../../assets/aziza3.jpg'
import img4 from '../../../../../assets/aziza4.jpg'


import Carousel from './Carousel'

const Datescards = () => {

    const content = [
        {
            title: "Aziza",
            description: "Aziza a noble variety of quality dates, due to its rarity and the diffuculté of its culture",
            img: img1,
        },
        {
            title: "Aziza amanzou",
            description: "Aziza a noble variety of quality dates, due to its rarity and the diffuculté of its culture",
            img: img2,
        },
        {
            title: "Laasyan",
            description: "Aziza a noble variety of quality dates, due to its rarity and the diffuculté of its culture",
            img: img3,
        },
        {
            title: "Boufagouss",
            description: "Aziza a noble variety of quality dates, due to its rarity and the diffuculté of its culture",
            img: img4,
        },
        {
            title: "Boufagouss",
            description: "Aziza a noble variety of quality dates, due to its rarity and the diffuculté of its culture",
            img: img1,
        },

    ];

    return (
        <div className='Datescards'>
            <Carousel content={content} />
        </div>
    );
};

export default Datescards


