import React from "react";
import PageHead from "../Essential/PageHead";
import Shopcategory from "../Essential/Shopcategory";
import Rated from "../Essential/Rated";
import '../Styles/Navpagecss/Wishlist.css';
import Vases from "../Essential/Vases";
import { NavLink } from "react-router-dom";

function Wishlist() {
    // console.log('Wishlist')
    return (
        <>
            <div className="Wishlist_Body">
                <div className="Wishlist_Header">
                    <PageHead Page_Heading={'Wishlist'} Page_Parafirst={'Home'} Page_Parasecond={'Wishlist'} Page_Firstforward={'/'} Page_Secondforward={'/Wishlist'} />
                </div>
                <div className="Wishlist_Content">
                    <div className='Wishlist_Maincontent'>
                        <div className="Wishlist_Leftcomponent">
                            <div className="Wishlist_Shop">
                                <Shopcategory />
                            </div>
                            <div className="Wishlist_Rated">
                                <Rated />
                            </div>
                            <div className='Wishlist_Vases'>
                                <Vases />
                            </div>
                        </div>
                        <div className="Wishlist_Rightcomponent">
                            <ul className="Wishlist_Unorderlist">
                                <li className="Wishlist_Addlist">
                                    <NavLink className='Wishlist_Addnav'>
                                        <div className="Wishlist_Addimage">
                                            <img className="Wishlist_Addimg" src='https://cdn.shopify.com/s/files/1/0644/4820/0925/products/9_25deeba8-ebff-4123-aed3-852865df9cd6.jpg?v=1652446686&width=224' alt="dfs" />
                                            <span className="Wishlist_Addremove">&#10005;</span>
                                        </div>
                                        <div className="Wishlist_Addprodetail">
                                            <h6 className="Wishlist_Addbrand">Product_Brand</h6>
                                        </div>
                                        <div>
                                            <h6 className="Wishlist_Addname">Product_Name</h6>
                                        </div>
                                        <div className="Wishlist_Addbutton">
                                            <button className="Wishlist_Addbtn">Add To Cart</button>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="Wishlist_Addlist">
                                    <NavLink className='Wishlist_Addnav'>
                                        <div className="Wishlist_Addimage">
                                            <img className="Wishlist_Addimg" src='' alt="dfs" />
                                            <span className="Wishlist_Addremove">&#10005;</span>
                                        </div>
                                        <div className="Wishlist_Addprodetail">
                                            <h6 className="Wishlist_Addbrand">Product_Brand</h6>
                                        </div>
                                        <div>
                                            <h6 className="Wishlist_Addname">Product_Name</h6>
                                        </div>
                                        <div className="Wishlist_Addbutton">
                                            <button className="Wishlist_Addbtn">Add To Cart</button>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="Wishlist_Addlist">
                                    <NavLink className='Wishlist_Addnav'>
                                        <div className="Wishlist_Addimage">
                                            <img className="Wishlist_Addimg" src='' alt="dfs" />
                                            <span className="Wishlist_Addremove">&#10005;</span>
                                        </div>
                                        <div className="Wishlist_Addprodetail">
                                            <h6 className="Wishlist_Addbrand">Product_Brand</h6>
                                        </div>
                                        <div>
                                            <h6 className="Wishlist_Addname">Product_Name</h6>
                                        </div>
                                        <div className="Wishlist_Addbutton">
                                            <button className="Wishlist_Addbtn">Add To Cart</button>
                                        </div>
                                    </NavLink>
                                </li><li className="Wishlist_Addlist">
                                    <NavLink className='Wishlist_Addnav'>
                                        <div className="Wishlist_Addimage">
                                            <img className="Wishlist_Addimg" src='' alt="dfs" />
                                            <span className="Wishlist_Addremove">&#10005;</span>
                                        </div>
                                        <div className="Wishlist_Addprodetail">
                                            <h6 className="Wishlist_Addbrand">Product_Brand</h6>
                                        </div>
                                        <div>
                                            <h6 className="Wishlist_Addname">Product_Name</h6>
                                        </div>
                                        <div className="Wishlist_Addbutton">
                                            <button className="Wishlist_Addbtn">Add To Cart</button>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="Wishlist_Addlist">
                                    <NavLink className='Wishlist_Addnav'>
                                        <div className="Wishlist_Addimage">
                                            <img className="Wishlist_Addimg" src='' alt="dfs" />
                                            <span className="Wishlist_Addremove">&#10005;</span>
                                        </div>
                                        <div className="Wishlist_Addprodetail">
                                            <h6 className="Wishlist_Addbrand">Product_Brand</h6>
                                        </div>
                                        <div>
                                            <h6 className="Wishlist_Addname">Product_Name</h6>
                                        </div>
                                        <div className="Wishlist_Addbutton">
                                            <button className="Wishlist_Addbtn">Add To Cart</button>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist;