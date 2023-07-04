import React from "react";
import '../Styles/Essentialcss/Filter.css';

function Filter() {
    return (
        <>
            <div className="Filter_Body">
                <div>
                    <h5 className="Filter_Heading">Filter By</h5>
                </div>
                <div className="Filter_Content">
                    <div className="Filter_Availability">
                        <div>
                            <h6 className="Filter_Availabilityheading">Availability</h6>
                        </div>
                        <div>
                            <div className="Filter_Stock">
                                <ul className="Filter_Stocklist">
                                    <li className="Filter_list">
                                        <label className="Filter_Stocklabel"><input className="Filter_Stockinput" type='checkbox' />In stock (5)</label>
                                    </li>
                                    <li className="Filter_list">
                                        <label className="Filter_Stocklabel disstock" aria-disabled='false'><input className="Filter_Stockinput" type='checkbox' disabled />Out of stock (0)</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='Filter_Price'>
                        <div>
                            <h6 className="Filter_Priceheading">Price</h6>
                        </div>
                        <div className="Filter_Priceparent">
                            <div className="Filter_Pricenum">
                                <div>
                                    <label htmlFor="from">From</label>
                                </div>
                                <span className="Filter_Pricespan">$</span>
                                <input type='number' id='from' min='10' max='1200' />
                            </div>
                            <div className="Filter_Pricenum">
                                <div>
                                    <label htmlFor="to">To</label>
                                </div>
                                <span className="Filter_Pricespan">$</span>
                                <input type='number' id='to' min='10' max='1200' />
                            </div>
                        </div>
                    </div>
                    <div className="Filter_Color">
                        <div>
                            <h6 className="Filter_Colorheading">Color</h6>
                        </div>
                        <div>
                            <ul className="Filter_listcolorname">
                                <li className="Filter_listcolor Filter_black"></li>
                                <li className="Filter_listcolor Filter_blue"></li>
                                <li className="Filter_listcolor Filter_green"></li>
                                <li className="Filter_listcolor Filter_grey"></li>
                                <li className="Filter_listcolor Filter_pink"></li>
                                <li className="Filter_listcolor Filter_red"></li>
                                <li className="Filter_listcolor Filter_white"></li>
                                <li className="Filter_listcolor Filter_yellow"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="Filter_Producttype">
                        <div>
                            <h6 className="Filter_Producttypeheading">Product type</h6>
                        </div>
                        <div>
                            <ul className="Filter_Stocklist">
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />Dried fruit (1)</label>
                                </li>
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />Fashion Crafts (5)</label>
                                </li>
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />Paper Crafts (3)</label>
                                </li>
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />Pottery and Glass Crafts (4)</label>
                                </li>
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />Textile Crafts (1)</label>
                                </li>
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />Wood Crafts (4)</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="Filter_Brand">
                        <div>
                            <h6 className="Filter_Brandheading">Brand</h6>
                        </div>
                        <div>
                            <ul className="Filter_Stocklist">
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />Anasha Art Gallery (4)</label>
                                </li>
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />Apkamart (4)</label>
                                </li>
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />Kauthuk (6)</label>
                                </li>
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />Mojarto (3)</label>
                                </li>
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />Oregano Art (1)</label>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="Filter_Size">
                        <div>
                            <h6 className="Filter_Sizeheading">Size</h6>
                        </div>
                        <div>
                            <ul className="Filter_Stocklist">
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />S (12)</label>
                                </li>
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />M (12)</label>
                                </li>
                                <li className="Filter_list">
                                    <label className="Filter_Stocklabel"><input type='checkbox' className="Filter_Stockinput" />L (11)</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter;