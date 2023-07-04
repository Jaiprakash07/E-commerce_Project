import React, { useEffect } from 'react';
import '../Styles/Componentcss/Carousel.css';
import Button from '../Essential/Button';

function Carousel() {
    // console.log('carousel')
    const carostyle = {
        width: '125px',
        height: '43px',
        padding: '0px',
        margin: '0px',
        color: '#ffffff',
        backgroundColor: '#9ea18e',
        border: 'none',
        // padding: '14px 30px',
    }

    let a = 1;
    let carotarrow = document.querySelectorAll('.carotarrow')
    const carofun = () => {
        carotarrow = document.querySelectorAll('.carotarrow')
        if (a === 1) {
            carotarrow[0].style.display = 'block';
            carotarrow[1].style.display = 'block';
        }
        // console.log(carotarrow)
    }

    const carofun2 = () => {
        carotarrow = document.querySelectorAll('.carotarrow')
        if (a === 1) {
            carotarrow[0].style.display = 'none';
            carotarrow[1].style.display = 'none';
        }
    }

    let ax = 0;
    let reuse = setInterval(() => {
        let caropara2 = document.querySelector('.caropara2')
        let carohead2 = document.querySelector('.carohead2')
        // let carobtn = document.querySelector('.carobtn')
        if (ax === 0) {
            caropara2.innerHTML = 'Top Trending Products';
            carohead2.innerHTML = 'Best Modern Wood Collection';
            // carobtn.setAttribute('btnshop','carostyle');
            // console.log('1st');
            ax = 1;
        }
        else if (ax === 1) {
            caropara2.innerHTML = 'Best Wooden Products';
            carohead2.innerHTML = 'New Sell Handmade Collection';
            // carobtn.setAttribute('btnshop', 'carostyle');
            // console.log('2nd');
            ax = 0;
        }
        // console.log('hii');
    }, 7000)


    // clearInterval(reuse)

    const swap1 = () => {
        const img1 = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/main-banner-2_1903x650.jpg?v=1652420082';
        const img2 = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/main-banner-1_1903x650.jpg?v=1652420060';

        // clearInterval(reuse);
        // reuse = clearInterval();
        const imageparent = document.querySelector('.imageparent')
        if (a === 1) {
            console.log('hi')
            imageparent.style.backgroundImage = img2;
            a = 2;
        }
        else if (a === 2) {
            console.log('hi2')
            imageparent.style.backgroundImage = img1;
            a = 1;
        }
        console.log(imageparent.style);
    }

    const swap2 = () => {
        const img1 = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/main-banner-2_1903x650.jpg?v=1652420082';
        const img2 = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/main-banner-1_1903x650.jpg?v=1652420060';

        // clearInterval(reuse);
        // reuse = clearInterval();
        const imageparent = document.querySelector('.imageparent')
        if (a === 1) {
            console.log('hi')
            imageparent.style.backgroundImage = img2;
            a = 2;
        }
        else if (a === 2) {
            console.log('hi2')
            imageparent.style.backgroundImage = img1;
            a = 1;
        }
        console.log(imageparent.style);
    }

    return (
        <>
            <div className='imageparent' onMouseOver={carofun} onMouseOut={carofun2}>
                <div className='imgabos'>
                    <div className='imagechild'>
                        <span className='carotarrow carotone' onClick={swap1} style={{ display: 'none' }} ><i class="fa-solid fa-arrow-left"></i></span>
                        <span className='carotarrow carottwo' onClick={swap2} style={{ display: 'none' }} ><i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className='imagecontent'>
                    <div className='caropara'>
                        <p className='caropara2'>Best Wooden Products</p>
                    </div>
                    <div className='carohead'>
                        <h1 className='carohead2'>New Sell Handmade Collection</h1>
                    </div>
                    <div className='carobtn'>
                        <Button btnshop={carostyle} />
                    </div>
                    {/* <div className='carosym'> */}
                    {/* <span className='carosym1'>1</span> */}
                    {/* <span className='carosym2'>2</span> */}
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export { Carousel };