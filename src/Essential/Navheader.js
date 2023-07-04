import React, { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import '../Styles/Essentialcss/Navheader.css';
import Offcanvas from './Offcanvas';
import { Cartstate } from '../Context/Contexts';

function Navheader() {
    const Forward_Overlay = useRef(null);
    const [state, dispatch] = Cartstate();
    const { addcart } = state;
    // console.log(state)

    function Opencart() {
        const Cart_Head = document.querySelector('.Cart_Head');
        Cart_Head.classList.add('Shopping_Cart');
        // console.log('Open_Offcanvas')

        const Overlay = document.querySelector('.Overlay');
        Overlay.classList.add('Overlay_Active');
    }

    const navi = useNavigate();
    function Openwishlist() {
        // navi('/Wishlist');   
    }

    window.onscroll = function () {
        // headerfixed() }

        // function headerfixed() {
        const fixed = document.querySelector('.headerparent')
        // console.log(fixed)
        if (document.documentElement.scrollTop > 400) {
            fixed.classList.add('sticky');
            // console.log('worked')
        }
        else if (document.documentElement.scrollTop < 400) {
            fixed.classList.remove('sticky');
            // console.log('not-worked')
        }
    }

    function open_navbar() {
        const dynamicNav = document.querySelector('.Cart_dynamic_Navbar')
        dynamicNav.classList.add('open_Navbar');
    }

    function close_navbar() {
        const dynamicNav = document.querySelector('.Cart_dynamic_Navbar')
        dynamicNav.classList.remove('open_Navbar');
    }

    // useEffect(() => {
    //     console.log(Forward_Overlay)
    // }, [])
    // console.log('Navheader')
    return (
        <>
            <div className='headerparent'>
                <div className='logoparent'>
                    <img className='logo_image' src='https://cdn.shopify.com/s/files/1/0644/4820/0925/files/logo_220x.png?v=1652419056' alt='artistic-logo' />
                </div>
                <div className='Nav_open other_nav'>
                <Navbar />
                </div>
                <div className='logoparent2'>
                    <ul className='logochild2'>
                        <li>
                            <NavLink><span className='logofont'><i class="fa-solid fa-user"></i></span></NavLink>
                        </li>
                        <li onClick={Openwishlist}>
                            <NavLink><span className='logofont'><i class="fa-solid fa-heart"></i></span></NavLink>
                        </li>
                        <li className='Cart_list' onClick={Opencart}>
                            <NavLink className='Cart_Nav'><span className='logofont'><span className='Carts_Num'>{addcart.length}</span><i class="fa-solid fa-cart-shopping"></i></span></NavLink>
                        </li>
                        <div ref={Forward_Overlay} className={`Overlay`}></div>
                        <div>
                            <Offcanvas Overlay_Act={Forward_Overlay} />
                        </div>
                        <li className='Cart_dynamic' onClick={open_navbar}>
                            <NavLink className='Cart_Nav'><span className='logofont'><i class="fa-solid fa-bars"></i></span></NavLink>
                        </li>
                        <div className='Cart_dynamic_Navbar'>
                            <span className='remove_Navbar' onClick={close_navbar}><i class="fa-solid fa-xmark"></i></span>
                            <Navbar />
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export { Navheader };