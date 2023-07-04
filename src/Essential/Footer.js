import React from 'react';
import Footerform from '../Components/Footerform';
import '../Styles/Essentialcss/Footer.css';
import Footerdetail from '../Components/Footerdetail';

function Footer() {
    // console.log('Footer')
    return (
        <>
            <div className='Footer_Back'>
                <div className='Footer_Firstform'>
                    <Footerform />
                </div>
                <div className="Footer_Backgroundimg">
                    <img className='Footerform_Img' src='https://cdn.shopify.com/s/files/1/0644/4820/0925/files/newsletter-parallax.jpg?v=1652440273' alt='Footer_BackgroundImage' />
                </div>
                <div className='Footer_Links'>
                    <Footerdetail />
                </div>
                <div className='Footer_Rights'>
                    <p className='Footer_mid'>© 2023, <span className='Footer_Art'>Artistic - Art & Craft Store (Password: Demo)</span><span className='Footer_Art'> Powered By Shopify (Jaiprakash Nagar)</span></p>
                </div>
            </div>
        </>
    )
}

export { Footer }; 