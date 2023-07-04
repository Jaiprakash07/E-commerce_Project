import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Productlist } from "../Essential/Productlist";
import '../Styles/Componentcss/Product.css';
import { Cartstate } from "../Context/Contexts";

function Product() {
    // let discountt = [{ discount: 11 }, { discount: 22 }, { discount: 33 }, { discount: 44 }, { discount: 55 }, { discount: 66 }, { discount: 77 }, { discount: 88 }, { discount: 99 }, { discount: 110 }, { discount: 121 }, { discount: 132 }, { discount: 143 }, { discount: 154 }, { discount: 165 }, { discount: 176 }, { discount: 187 }, { discount: 198 }, { discount: 209 }, { discount: 220 }]
    let discountt = ['-11%', '-42%', '-38%', '-64%', '-50%', '-9%', '-78%', '-18%', '-39%', '-10%', '-21%', '-12%', '-43%', '-54%', '-56%', '-76%', '-27%', '-98%', '-9%', '-22%']
    let Sale = ['Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale', 'Sale'];
    let rupee = <span>&#8377;</span>
    let unprice = ['99.00', '18.00', '50.00', '10.00', '622.00', '140.00', '8.00', '8.99.00', '52.50.00', '99.00', '99.00', '102.00', '499.00', '900.00', '47.00', '20.00', '30.00', '8.00', '7.00', '10.00']

    // let Hide;
    const swipeslide = useRef();
    let [state, dispatch] = Cartstate()
    let { isLoading, cart, addcart } = state;
    // console.log(isLoading, cart, addcart)
    // console.log(state)

    // let carted = cart.map((obj,index) => ({...obj, discountt[0]}))  // 1st map method, doesn't work;

    let Hide;
    cart.map((cart, index) => {                                         // 2nd map method work
        cart.named = 'jaiprakash_nagar';
        if (index % 2 === 0) {
            // cart.hide = 'Prolist_Hide;
            Hide = 'Prolist_Hide';
            // console.log('i am empty')
        }
        else if ((index + 3) % 3 !== 0) {
            Hide = null;
            cart.indianrupee = rupee;
            cart.Sale = Sale[index]
            cart.discount = discountt[index];
            cart.unprice = unprice[index];
            // cart.id = 277;
            // console.log(cart)
        }
        else {
            // Do Nothing;
            // cart.hide = 'Prolist_Hide;
            Hide = 'Prolist_Hide';
            // console.log('funk you')
        }
    })
    // console.log(isLoading, cart, addcart)
    // console.log(addcart);

    function swipe1() {
        swipeslide.current.scrollLeft -= 150;
    }

    function swipe2() {
        swipeslide.current.scrollLeft += 150;
    }
    // console.log('Product')
    return (
        <>
            <div className="Product">
                <div className="Product_Head">
                    <div className="Product_Headname">
                        <div className="Product_Headtitle">
                            <ul className="Product_ul">
                                <li className="Product_li Pro_li1">
                                    <NavLink>Latest Item</NavLink>
                                </li>
                                <li className="Product_li">
                                    <NavLink>Trending Item</NavLink>
                                </li>
                                <li className="Product_li Pro_li3">
                                    <NavLink>Best Seller</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="Product_Btn">
                        <div className="Product_btn">
                            <button onClick={swipe1}><i class="fa-solid fa-caret-left"></i></button>
                        </div>
                        <div className="Product_btn">
                            <button onClick={swipe2}><i class="fa-solid fa-caret-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="Product_body" ref={swipeslide}>
                    {/* <Productlist Pro_id={'cart[0].id'} Pro_Img={isLoading ? 'Loading...' : cart[19].image} Pro_Title={isLoading ? 'Loading...' : cart[19].title} Pro_Price={'cart[19].price'} Pro_Unprice={'$290.00'} Pro_Span={'Sale'} Pro_Divspan={'-13%'} /> */}
                    {/* <Productlist Pro_Img={'Fakedata[17].image'} Pro_Title={'Fakedata[17].title'} Pro_Price={'$250.00 '} Pro_Span={null} Pro_Divspan={null} Pro_Hide={'Prolist_Hide'} /> */}
                    {/* <Productlist Pro_Img={'pass.state.product[2].image'} Pro_Title={'fakeimgname3'} Pro_Price={'$370.00 '} Pro_Unprice={'$390.00'} Pro_Span={'Sale'} Pro_Divspan={'-5%'} /> */}
                    {/* <Productlist Pro_Img={'pass.state.product[3].image'} Pro_Title={'fakeimgname4'} Pro_Price={'$85.00 '} Pro_Unprice={'$97.00'} Pro_Span={'Sale'} Pro_Divspan={'-12%'} /> */}
                    {/* <Productlist Pro_Img={'pass.state.product[4].image'} Pro_Title={'fakeimgname5'} Pro_Price={'$70.00 '} Pro_Unprice={'$75.00'} Pro_Span={'Sale'} Pro_Divspan={'-6%'} /> */}
                    {/* <Productlist Pro_Img={'pass.state.product[5].image'} Pro_Title={'fakeimgname6'} Pro_Price={'$235.00 '} Pro_Hide={'Prolist_Hide'} /> */}
                    {/* <Productlist Pro_Img={'pass.state.product[6].image'} Pro_Title={'fakeimgname7'} Pro_Price={'$240.00 '} Pro_Hide={'Prolist_Hide'} /> */}
                    {/* <Productlist Pro_Img={'pass.state.product[7].image'} Pro_Title={'fakeimgname8'} Pro_Price={'$250.00 '} Pro_Hide={'Prolist_Hide'} /> */}
                    {/* <Productlist Pro_Img={'pass.state.product[8].image'} Pro_Title={'fakeimgname9'} Pro_Price={'$100.00 '} Pro_Unprice={'$120.00'} Pro_Span={'Sale'} Pro_Divspan={'-16%'} /> */}
                    {/* <Productlist Pro_Img={'pass.state.product[9].image'} Pro_Title={'fakeimgname10'} Pro_Price={'$17.00 '} Pro_Unprice={'$19.00'} Pro_Span={'Sale'} Pro_Divspan={'-10%'} /> */}

                    {cart.map(cart => (
                        <div className="Product_Line">
                            <Productlist key={isLoading ? 'Loading...' : cart.id}
                                Pro_Key={isLoading ? 'Loading...' : cart.id}
                                Pro_Img={isLoading ? 'Loading...' : cart.image}
                                Pro_Title={isLoading ? 'Loading...' : cart.title}
                                Pro_Price={isLoading ? 'Loading...' : cart.price}
                                Pro_Rupee={isLoading ? 'Loading...' : cart.indianrupee}
                                Pro_Unprice={isLoading ? 'Loading...' : cart.unprice}
                                Pro_Hide={isLoading ? 'Loading...' : Hide}
                                Pro_Span={isLoading ? 'Loading...' : cart.Sale}
                                Pro_Divspan={isLoading ? 'Loading...' : cart.discount} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export { Product };