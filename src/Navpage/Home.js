import React from 'react';
import { Carousel } from '../Components/Carousel';
import { Slide } from '../Components/Slide';
// import { Api } from '../Essential/Api';
import { Product } from '../Components/Product';
import { Midbanner } from '../Components/Midbanner';
import Secproduct from '../Components/Secproduct';
import Blogpost from '../Components/Blogpost';
import '../Styles/Navpagecss/Home.css';
// import { Jai } from '../Context/Contexts';

function Home() {
    return (
        <>
        <div className='Home_Back'>
            <Carousel />
            <Slide />
            <Product />
            {/* <Api /> */}
            <Midbanner />
            <Secproduct />
            <Blogpost />
            {/* <Jai/> */}
        </div>
        </>
    )
}

export { Home };