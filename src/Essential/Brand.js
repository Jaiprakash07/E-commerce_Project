import React from 'react';
import '../Styles/Essentialcss/Brand.css';

function Brand({Brand_Img, Brand_Name}) {
    // console.log('Brand')
    return (
        <>
        <div className='Brand_Body'>
            <div className='Brand_Image'>
                <img className='Brand_img' src={Brand_Img} alt={Brand_Name} />
            </div>
        </div>
        </>
    )
}

export default Brand;