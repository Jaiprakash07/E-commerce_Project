import React from "react";
import { NavLink } from "react-router-dom";
// import Button from "./Button";
import '../Styles/Essentialcss/Dealproduct.css';

function Dealproduct({Dealname, Dealprice, Dealunprice, Dealdetail, Dealsale, Dealsalep}) {
    // console.log('Dealproduct')
    return (
        <>
            <div className="Deal_Body">
                <div className="Deal_Saleimage">
                    <NavLink className='Deal_Nav'>
                        <div className="adiv">
                            <span className="spandiv">{Dealsale}</span>
                            <div className="divspan">{Dealsalep}</div>
                        </div>
                        <div className="Deal_Image">
                            <img src='' alt='chinese lamp' />
                        </div>
                    </NavLink>
                </div>
                <div className="Deal_Content">
                    <div className="Deal_Name">
                        <NavLink className='Deal_Heading'>
                            <h6>{Dealname}</h6>
                        </NavLink>
                    </div>
                    <div className="Deal_Star">
                        <span>5 star</span>
                    </div>
                    <div className="Deal_Price">
                        <span>{Dealprice}</span>
                        <span className='Deal_Line'>{Dealunprice}</span>
                    </div>
                    <div className="Deal_Detail">
                        <p className="Deal_Para">{Dealdetail}</p>
                    </div>
                    <div className="Deal_Button">
                        <NavLink className='Deal_Btn'>
                            <button className="Deal_bt">Select Option</button>
                        </NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export { Dealproduct };