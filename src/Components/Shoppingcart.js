import React, { useRef } from 'react';
import '../Styles/Componentcss/Shoppingcart.css';
import { NavLink } from 'react-router-dom';
import { Cartstate } from '../Context/Contexts';
import { Product } from './Product';

function Shoppingcart({ Shop_Key, Shop_Image, Shop_Name, Shop_Price }) {
    let [state, dispatch] = Cartstate();
    let { addcart } = state;
    // console.log(addcart)
    const achieve = useRef(null)

    function addcart_remove(e) {
        function called(addcart) {
            return Shop_Key === addcart.Product_Key;
        }

        let l = addcart.findIndex(called)
        state.addcart.splice(l, 1)
        // console.log(state)

        dispatch({
            type: 'Remove_Cart',
            payload: {
                addcart: [...state.addcart]
            }
        })
    }
    // console.log(state)
    // console.log(Shop_Key)
    // console.log('Shoppingcart')
    return (
        <>
            <div className='Shopcart_Body'>
                <div className='Shopcart_widthimg'>
                    <div className='Shopcart_Mainimg'>
                        <NavLink>
                            <div className='Shopcart_Imagebody'>
                                {/* <img className='Shopcart_Image' src={'https://cdn.shopify.com/s/files/1/0644/4820/0925/products/9_25deeba8-ebff-4123-aed3-852865df9cd6_140x.jpg?v=1652446686'} alt='Shopcartimage' /> */}
                                <img className='Shopcart_Image' src={Shop_Image} alt='Shopcartimage' />
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div className='Shopcart_Content'>
                    <div>
                        <h6 className='Shopcart_Name'>{Shop_Name}</h6>
                    </div>
                    <div>
                        <span>&#8377;</span>
                        <span className='Shopcart_Price'>{Shop_Price}</span>
                    </div>
                    <div>
                        <span className='Shopcart_Color'>White</span>
                    </div>
                </div>
            </div>
            <div className='Shopcart_Deletebody' onClick={addcart_remove}>
                <span ref={achieve} className='Shopcart_delete'><i class="fa-solid fa-trash-can"></i></span>
            </div>
        </>
    )
}

export default Shoppingcart;