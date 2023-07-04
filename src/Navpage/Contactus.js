import React, { useEffect } from 'react';
import PageHead from '../Essential/PageHead';
import '../Styles/Navpagecss/Contactus.css';

function Contactus() {

    async function Mymap() {
        // let mapCanvas = document.querySelector('#map');
        // let mapoption = { center :  new google.maps.LatLng}
        // let elevation = google.maps.ElevationService();
        let location =  [ { lat: 27.986065 , lng: 86.922623}]

        // let respone = await elevation.getElevationForLocation({location});
        // console.log(respone.result)
    } 

    useEffect(() => {
        Mymap();
    },[])

    // console.log('Contact Us')
    return (
        <>
            {/* <h2>Contact Us</h2> */}
            <div className='Contact_Body'>
                <div className='Contact_Header'>
                    <PageHead Page_Heading={'Contact Us'} Page_Parafirst={'Home'} Page_Parasecond={'Contact Us'} />
                </div>
                <div className='Contact_Content'>
                    <div className='Contact_Formdata'>
                        <form className='Contact_Form'>
                            <div>
                                <h4 className='Contact_heading'>Contact Us</h4>
                            </div>
                            <div>
                                {/* <label className='Contact_Name'>Name</label><br /> */}
                                <input className='Contact_inputname' type='text' placeholder='Name' />
                            </div>
                            <div>
                                {/* <label className='Contact_Email'>Email</label><br /> */}
                                <input className='Contact_inputemail' type='email' placeholder='Email'/>
                            </div>
                            <div>
                                {/* <label className='Contact_Phone'>Phone number</label><br /> */}
                                <input className='Contact_inputnumber' type='text' placeholder='Phone number'/>
                            </div>
                            <div>
                                {/* <label className='Contact_Comment'>Comment</label><br /> */}
                                <textarea className='Contact_inputtextarea' placeholder='Comment'/>
                            </div>
                            <div>
                                <input className='Contact_button' type='button' value='Send' />
                            </div>
                        </form>
                    </div>
                    <div className='Contact_Data'>
                        <div>
                            <h4 className='Contact_Touch'>Get In Touch With Us</h4>
                        </div>
                        <div>
                            <p className='Contact_Webinfo'>We create premium and professional website templates for most popular platforms available in the market today
                            </p>
                        </div>
                        <div className='Contact_Address'>
                            <span className='Contact_Spanhome'><i class="fa-solid fa-house-chimney"></i></span>
                            <span className='Contact_Spanaddress'>33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</span>
                        </div>
                        <div className='Contact_Phonenumber'>
                            <span className='Contact_Spanphone'><i class="fa-solid fa-phone"></i></span>
                            <span className='Contact_Spannumber'>(+91)012-345-6789</span>
                        </div>
                        <div className='Contact_Emailaddress'>
                            <span className='Contact_Spanmail'><i class="fa-solid fa-envelope"></i></span>
                            <span className='Contact_Spanemailid'>coffeeter@exampledemo.com</span>
                        </div>
                        <div className='Contact_Information'>
                            <span className='Contact_Spaninfo'><i class="fa-solid fa-info"></i></span>
                            <span className='Contact_Spandays'>Monday – Friday 10 AM – 8 PM</span>
                        </div>
                    </div>
                </div>
                <div className='Contact_Googlemap' id='map'>
                    <iframe></iframe>
                </div>
            </div>
        </>
    )
}

export { Contactus };