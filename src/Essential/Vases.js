import React from 'react';
import '../Styles/Essentialcss/Vases.css';

function Vases() {
    return (
        <>
            <div className='Vases_Mainbody'>
                <div className='Vases_Body'>
                    <div className='Vases_Image'>
                        <img class='Vases_img' src='https://cdn.shopify.com/s/files/1/0644/4820/0925/files/left-banner-1_large.jpg?v=1652511205' alt='Vases' />
                    </div>
                    <div className='Vases_Content'>
                        <div className='Vases_Discount'>
                            <span className='Vases_dis'>35% Discount</span>
                        </div>
                        <div>
                            <h2 className='Vases_Heading'>Ceramics Vases</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vases;