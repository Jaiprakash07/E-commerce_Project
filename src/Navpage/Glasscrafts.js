import React from "react";
import PageHead from '../Essential/PageHead';
import Shopcategory from '../Essential/Shopcategory';
import Rated from '../Essential/Rated';
import Vases from '../Essential/Vases';

function Glasscrafts() {
    // console.log('Glasscrafts')
    return (
        <>
        <div>
            <h2>Glass-crafts</h2>
            <div className='desi_Body'> 
            <div className='desi_Header'>
                <PageHead />
            </div>
            <div className='desi_Content'>
                <div className='desi_Maincontent'>
                    <div className='desi_Leftcomponent'>
                        <div className='desi_Shop'>
                            <Shopcategory />
                        </div>
                        <div className='desi_Rated'>
                            <Rated />
                        </div>
                        <div className='desi_Vases'>
                            <Vases />
                        </div>
                    </div>
                    <div className='desi_RightComponent'>
                        <h2>Right Components</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Glasscrafts;