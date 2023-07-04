import React from "react";
import '../Styles/Componentcss/Footerform.css';

function Footerform() {
    // console.log('Footerform')
    return (
        <>
            <div className="Footerform_Body">
                <div className="Footerform_Content">
                    <div>
                        <h4 className="Footerform_Heading">Get Our Latest Update !</h4>
                    </div>
                    <div>
                        <h5 className='Footerform_Para'>Subscribe to our latest newsletter to get news about special discounts.</h5>
                    </div>
                    <div className="Footerform_Form">
                        <input className='Footerform_Input' type="text" placeholder="Your Email Address" />
                        <button className="Footerform_Button">Subscribe</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footerform;