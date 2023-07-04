import React from 'react';
import '../Styles/Componentcss/Footerdetail.css';
import { NavLink } from 'react-router-dom';

function Footerdetail() {

    let a = 1;
    function open_footerinfo() {
        const flex_one = document.querySelector('.Footerdetail_infodetail')
        if (a === 1) {
            flex_one.classList.add('flex_ones')
            a = 2;
        }
        else if (a === 2) {
            flex_one.classList.remove('flex_ones')
            a = 1;
        }
    }

    function open_footerquick() {
        const flex_two = document.querySelector('.Footerdetail_Quicklist')
        if (a === 1) {
            flex_two.classList.add('flex_twos')
            a = 2;
        }
        else if (a === 2) {
            flex_two.classList.remove('flex_twos')
            a = 1;
        }
    }
    
    function open_footerservices() {
        const flex_three = document.querySelector('.Footerdetail_Serviceslist')
        if (a === 1) {
            flex_three.classList.add('flex_threes')
            a = 2;
        }
        else if (a === 2) {
            flex_three.classList.remove('flex_threes')
            a = 1;
        }
    }

    function open_footerinformation() {
        const flex_four = document.querySelector('.Footerdetail_Informationlist')
        if (a === 1) {
            flex_four.classList.add('flex_fours')
            a = 2;
        }
        else if (a === 2) {
            flex_four.classList.remove('flex_fours')
            a = 1;
        }
    }

    // console.log('Footerdetail')
    return (
        <>
            <div className='Footerdetail_Body'>
                <div className='Footerdetail_info'>
                    <div className='Footerdetail_flex' onClick={open_footerinfo}>
                        <h6 className='Footerdetail_infoHeading'>Our Information</h6>
                        <span className='Footerdetail_hide'><i class="fa-solid fa-caret-down"></i></span>
                    </div>
                    <div className='Footerdetail_infodetail'>
                        <div className='Footerdetail_Address'>
                            <span className='Footerdetail_Addlogo'><i class="fa-solid fa-map-location-dot"></i></span>
                            <span className='Footerdetail_Adds'>33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</span>
                        </div>
                        <div className='Footerdetail_Number'>
                            <span className='Footerdetail_Numlogo'><i class="fa-solid fa-headset"></i></span>
                            <span className='Footerdetail_Nums'>(+91)012-345-6789</span>
                        </div>
                        <div className='Footerdetail_Email'>
                            <span className='Footerdetail_Maillogo'><i class="fa-solid fa-envelope-open-text"></i></span>
                            <span className='Footerdetail_Mails'>artistic@exampledemo.com</span>
                        </div>
                        <div className='Footerdetail_Social'>
                            <div className='Footerdetail_Sociallogo'><i class="fa-brands fa-twitter"></i></div>
                            <div className='Footerdetail_Sociallogo'><i class="fa-brands fa-facebook"></i></div>
                            <div className='Footerdetail_Sociallogo'><i class="fa-brands fa-pinterest"></i></div>
                            <div className='Footerdetail_Sociallogo'><i class="fa-brands fa-instagram"></i></div>
                            <div className='Footerdetail_Sociallogo'><i class="fa-brands fa-youtube"></i></div>
                        </div>
                    </div>
                </div>
                <div className='Footerdetail_Quicklink'>
                    <div className='Footerdetail_flex' onClick={open_footerquick}>
                        <h6>Quick Links</h6>
                        <span className='Footerdetail_hide'><i class="fa-solid fa-caret-down"></i></span>
                    </div>
                    <div>
                        <ul className='Footerdetail_Quicklist'>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>Contact Us</li>
                            </NavLink>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>Shipping</li>
                            </NavLink>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>Sitemap</li>
                            </NavLink>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>FAQs</li>
                            </NavLink>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>Stores</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
                <div className='Footerdetail_Services'>
                    <div className='Footerdetail_flex' onClick={open_footerservices}>
                        <h6>Services</h6>
                        <span className='Footerdetail_hide'><i class="fa-solid fa-caret-down"></i></span>
                    </div>
                    <div>
                        <ul className='Footerdetail_Serviceslist'>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>Terms Conditions</li>
                            </NavLink>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>Policy for Sellers</li>
                            </NavLink>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>Policy for Buyers</li>
                            </NavLink>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>Shipping & Refund</li>
                            </NavLink>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>Wholesale Policy</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
                <div className='Footerdetail_Information'>
                    <div className='Footerdetail_flex' onClick={open_footerinformation}>
                        <h6>Information</h6>
                        <span className='Footerdetail_hide'><i class="fa-solid fa-caret-down"></i></span>
                    </div>
                    <div>
                        <ul className='Footerdetail_Informationlist'>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>Delivery Information</li>
                            </NavLink>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>About Us</li>
                            </NavLink>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>Privacy Policy</li>
                            </NavLink>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>Terms and Conditions</li>
                            </NavLink>
                            <NavLink className='Footerdetail_Navlink'>
                                <li className='Footerdetail_list'>Search</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footerdetail;