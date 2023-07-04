import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Essentialcss/Rated.css';

function Rated() {
    return (
        <>
            <div className='Rated_Body'>
                <div>
                    <h5 className='Rated_Heading'>Top Rated Products</h5>
                </div>
                <div className='Rated_Content'>
                    <div className='Rated_Productfirst'>
                        <NavLink className='Rated_Nav'>
                            <div className='Rated_Image'>
                                <img className='Rated_img' src='https://cdn.shopify.com/s/files/1/0644/4820/0925/products/9_25deeba8-ebff-4123-aed3-852865df9cd6_100x.jpg?v=1652446686' alt='fakeapiimage' />
                            </div>
                        </NavLink>
                        <div className='Rated_Productinfo'>
                            <div className='Rated_Star'>
                                <span className='Rated_Fivestar'>5 star</span>
                            </div>
                            <div className='Rated_Name'>
                                <NavLink className='Rated_Nav'>
                                    <h6 className='Rated_Productname'>Product_Name</h6>
                                </NavLink>
                            </div>
                            <div className='Rated_Price'>
                                <span className='Rated_Oriprice'>price</span>
                            </div>
                        </div>
                    </div>
                    <div className='Rated_Productsecond'>
                        <NavLink className='Rated_Nav'>
                            <div className='Rated_Image'>
                                <img className='Rated_img' src='' alt='fakeapiimage' />
                            </div>
                        </NavLink>
                        <div className='Rated_Productinfo'>
                            <div className='Rated_Star'>
                                <span className='Rated_Fivestar'>5 star</span>
                            </div>
                            <div className='Rated_Name'>
                                <NavLink className='Rated_Nav'>
                                    <h6 className='Rated_Productname'>Product_Name</h6>
                                </NavLink>
                            </div>
                            <div className='Rated_Price'>
                                <span className='Oriprice'>price</span>
                            </div>
                        </div>
                    </div>
                    <div className='Rated_Productthird'>
                        <NavLink className='Rated_Nav'>
                            <div className='Rated_Image'>
                                <img className='Rated_img' src='' alt='fakeapiimage' />
                            </div>
                        </NavLink>
                        <div className='Rated_Productinfo'>
                            <div className='Rated_Star'>
                                <span className='Rated_Fivestar'>5 star</span>
                            </div>
                            <div className='Rated_Name'>
                                <NavLink className='Rated_Nav'>
                                    <h6 className='Rated_Productname'>Product_Name</h6>
                                </NavLink>
                            </div>
                            <div className='Rated_Price'>
                                <span className='Rated_Oriprice'>price</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Rated_Link'>
                    <NavLink className='Rated_Productslink Rated_Nav'>All Products</NavLink>
                </div>
            </div>
        </>
    )
}

export default Rated;