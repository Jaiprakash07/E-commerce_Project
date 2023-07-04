import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import '../Styles/Essentialcss/Productlist.css';
import Cartreducer from "../Context/Reducers";
import { Cartstate } from "../Context/Contexts";

function Productlist({ Pro_Key, Pro_Img, Pro_Title, Pro_Price, Pro_Unprice, Pro_Rupee, Pro_Span, Pro_Divspan, Pro_Hide }) {
    const imgref = useRef();
    const imgnameref = useRef();
    const priceref = useRef();
    const prodref = useRef();
    let [state, dispatch] = Cartstate();

    // console.log(state.addcart)

    function Cart_Add(event) {
        // const Product_Key = Pro_Key;
        // const Product_Name = imgnameref.current.innerText;
        // const Product_Price = priceref.current.innerText
        // const Product_Image = imgref.current.src;

        let Product_Key = Pro_Key;
        let Product_Name = imgnameref.current.innerText;
        let Product_Price = priceref.current.innerText;
        let Product_Image = imgref.current.src;

        // console.log("======",  [...state.addcart, "aaa"])
        // console.log("======", state.addcart)
        // console.log(value.toSt   ring());
        // ({ Imgref } = imgref.current.src);
        // ({ Imgnameref } = imgnameref.current.innerHTML);
        // ({ Priceref } = priceref.current.innerHTML);

        // console.log(Pro_Key)
        // console.log(imgref.current.src)
        // console.log(imgnameref.current.innerHTML)
        // console.log(priceref.current.innerHTML)
        // return
        dispatch({
            type: 'Add_Cart',
            payload: {
                // addcart: prodref.current
                addcart: [...state.addcart, { Product_Key, Product_Name, Product_Price, Product_Image }]
            }
        })
        // console.log(state.addcart)
        // console.log(dispatch)
    }
    // console.log('Productlist')
    return (
        <>
            <div ref={prodref} className="Prolist_head">
                <NavLink className='Prolist_Navhead'>
                    <div className="Prolist_Offer">
                        <NavLink className={`Prolist_Nav ${Pro_Hide}`}>
                            {/* {span == '' && */}
                            {/* <span className="spandiv"></span> */}
                            <span className={`spandiv`}>{Pro_Span}</span>
                            {/* } */}
                            <div className="divspan">{Pro_Divspan}</div>
                        </NavLink>
                        <div className="Prolist_Card">
                            <span className="Prolist_Wishlist"><i class="fa-solid fa-heart"></i></span>
                            {/* </div> */}
                            {/* <div> */}
                            <span className="Prolist_Cart" onClick={Cart_Add}><i class="fa-solid fa-cart-shopping"></i></span>
                            {/* </div> */}
                            {/* <div> */}
                            <span className="Prolist_View"><i class="fa-solid fa-eye"></i></span>
                        </div>
                    </div>
                    <div className="Prolist_Image">
                        <NavLink>
                            {/* <div className="Inner_Img"> */}
                            <div className="Prolist_Fakeimg">
                                <img className='fake_img' ref={imgref} src={Pro_Img} alt='fakeapiimg' />
                            </div>
                            {/* </div> */}
                        </NavLink>
                    </div>
                    <div className="Prolist_Imgname">    
                        <NavLink>
                            <h6 ref={imgnameref}>{Pro_Title}</h6>
                        </NavLink>
                    </div>
                    <div className="Prolist_Star">
                        <span>5 star</span>
                    </div>
                    <div className="Prolist_Price">
                    <span>&#8377;</span>
                        <span ref={priceref}>{Pro_Price} </span>
                        <span id='Prolist_Line'>{Pro_Rupee}{Pro_Unprice}</span>
                    </div>
                    <div className="Prolist_Btn">
                        <button>Select Option</button>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export { Productlist };