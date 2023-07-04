import React from "react";
import { NavLink } from "react-router-dom";
import '../Styles/Essentialcss/PageHead.css'

function PageHead({Page_Heading, Page_Parafirst, Page_Parasecond, Page_Parathird, Page_Parafourth, Page_Firstforward, Page_Secondforward, Page_Thirdforward, Page_Fourthforward,Pagenav_Second, Pagenav_Third}) {
    return (
        <>
        <div>
            <div className="Page_Body">
                <div className="Page_heads">
                    <h4 className="Page_headings">{Page_Heading}</h4>
                </div>
                <div className="Page_Links">
                    <NavLink to={Page_Firstforward} className='Page_Navfirst'>{Page_Parafirst}</NavLink>
                    <NavLink to={Page_Secondforward} className={`Page_Navsecond ${Pagenav_Second}`}>{Page_Parasecond}</NavLink>
                    <NavLink to={Page_Thirdforward} className={`Page_Navthird ${Pagenav_Third}`}>{Page_Parathird}</NavLink>
                    <NavLink to={Page_Fourthforward} className='Page_Navfourth'>{Page_Parafourth}</NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

export default PageHead;