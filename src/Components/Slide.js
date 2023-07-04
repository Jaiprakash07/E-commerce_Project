import React, { useContext, useRef, useState } from 'react';
import { Slidebox } from '../Essential/Slidebox';
// import { Create } from '../Essential/Api';
import '../Styles/Componentcss/Slide.css';
import Button from '../Essential/Button';

function Slide() {
    // const {value1} = useContext(Create);
    // console.log(value1.slideimg)
    const img1 = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/category-1_204x204.jpg?v=1652421800';
    const img2 = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/category-2_204x204.jpg?v=1652421846';
    const img3 = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/category-3_204x204.jpg?v=1652421846';
    const img4 = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/category-4_204x204.jpg?v=1652421846';
    const img5 = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/category-5_204x204.jpg?v=1652421846';
    const img6 = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/category-6_0b9a93d7-eeb6-4cf8-aac9-081f98862401_204x204.jpg?v=1652421889';

    const shiftslide = useRef();
    const shift1 = () => {
        shiftslide.current.scrollLeft -= 150;
        // console.log(shiftslide.current)
    }

    const shift2 = () => {
        shiftslide.current.scrollLeft += 150;
        // console.log(shiftslide)
    }
    // console.log('slide')
    return (
        <>
            <div className='centerSlide'>
                <div className='slide'>
                    <div className='slidehead'>
                        <div className='slideheading'>
                            <h5>Shop By Category</h5>
                        </div>
                        <div className='slidebuttons'>
                            <div className='slidebtn1'>
                                <button onClick={shift1}><i class="fa-solid fa-caret-left"></i></button>
                            </div>
                            <div className='slidebtn1'>
                                <button onClick={shift2}><i class="fa-solid fa-caret-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='slidebody' ref={shiftslide}>
                        <Slidebox boxname={'Architecture Art'} boxitemno={'(15 Items)'} boximg={img1} />
                        <Slidebox boxname={'Literature Art'} boxitemno={'(17 Items)'} boximg={img2} />
                        <Slidebox boxname={'Theater Art'} boxitemno={'(16 Items)'} boximg={img3} />
                        <Slidebox boxname={'Ceramics Art'} boxitemno={'(15 Items)'} boximg={img4} />
                        <Slidebox boxname={'Sculpture Art'} boxitemno={'(15 Items)'} boximg={img5} />
                        <Slidebox boxname={'Painting Art'} boxitemno={'(14 Items)'} boximg={img6} />
                    </div>
                </div>
                <div className='threeads'>
                    <div className='adss1'>
                        <div className='imgknot'>
                        </div>
                        <div className='upper'>
                            <div>
                                <h4>Flat Discount 30%</h4>
                            </div>
                            <div>
                                <h1>Knitted Cord Coasters</h1>
                            </div>
                            <div className='imgcordbtn'>
                                <Button />
                            </div>
                        </div>
                    </div>
                    <div className='adss2'>
                        <div className='adtwice1'>
                            <div className='imgiconic'>
                            </div>
                            <div className='chairimg'>
                                <div>
                                    <h5>25% Discount</h5>
                                </div>
                                <div>
                                    <h2>Iconic Cloud Chair</h2>
                                </div>
                                <div className='chairbtn'>
                                    <Button />
                                </div>
                            </div>
                        </div>
                        <div className='adtwice2'>
                            <div className='imgspecial'>
                            </div>
                            <div className='nordicimg'>
                                <div>
                                    <h5>35% Discount</h5>
                                </div>
                                <div>
                                    <h2>Special Matte Nordic</h2>
                                </div>
                                <div className='nordbtn'>
                                    <Button />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Slide };