import React, { useContext, useEffect, useState } from 'react';
import '../Styles/Essentialcss/Offcanvas.css';
import Shoppingcart from '../Components/Shoppingcart';
import { Cartstate } from '../Context/Contexts';
// import { NavLink } from 'react-router-dom';

function Offcanvas({ Overlay_Act }) {
    const [total, settotal] = useState([]);

    const [state, dispatch] = Cartstate();
    const { isLoading, cart, addcart } = state;
    // let addcart[]
    // console.log(state);

    function Closecart({ Close_Overlay }) {
        const Cart_Head = document.querySelector('.Cart_Head');
        Cart_Head.classList.remove('Shopping_Cart');
        // console.log('Close_Offcanvas')

        // console.log(Overlay_Act)
        const Overlay = document.querySelector('.Overlay');
        Overlay.classList.remove('Overlay_Active');
        // console.log(Overlay_Act)
    }

    {
        addcart.map(addcart => {
        // settotal([...total, addcart.Product_Price])
        // console.log(addcart)
        })
    }    
    // console.log(addcart)

    // let subtotal = [...addcart.price]
    // console.log(addcart[0].Product_Price)
    // console.log('Offcanvas')
    return (
        <>
            <div>
                <div className='Cart_Head'>
                    <span className='Cart_OffHeading'>Your Shopping Cart</span>
                    <span className='Cart_Close' onClick={Closecart}>&times;</span>
                    <hr className='Cart_hr' />
                    <div className='Cart_Manage'>
                        <div className='Cart_Body'>
                            {addcart.map(addcart => (
                                <div className='Cart_Flex'>
                                    <Shoppingcart Shop_Key={addcart.Product_Key}
                                        Shop_Name={addcart.Product_Name}
                                        Shop_Price={addcart.Product_Price}
                                        Shop_Image={addcart.Product_Image} />
                                </div>
                            ))}
                        </div>
                        <div className='Cart_Checkout'>
                            <div className='Cart_Checkout_Head'>
                                <div className='Cart_Checkspans'>
                                    <span className='Cart_Checktotal'>Total Item</span>
                                    <span className='Cart_Checktotalvalue'>{addcart.length}</span>
                                </div>
                                <div className='Cart_Checkspans'>
                                    <span className='Cart_Checktotal'>Subtotal</span>
                                    <span className='Cart_Checktotalvalue'>&#8377; {isLoading ? 'Loading...' : total }</span>
                                </div>
                            </div>
                            <div className='Cart_Button'>
                                <div>
                                    <button className='Cart_Viewcart Cart_Viewcolor'>View Cart</button>
                                </div>
                                <div>
                                    <button className='Cart_Check_Out Cart_Viewcolor'>Check Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offcanvas;