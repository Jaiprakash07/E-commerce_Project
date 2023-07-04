import React from 'react';
import PageHead from '../Essential/PageHead';
import Shopcategory from '../Essential/Shopcategory';
import Filter from '../Essential/Filter';
import Rated from '../Essential/Rated';
import Vases from '../Essential/Vases';
import '../Styles/Navpagecss/Handprint.css';

function Handprint() {
    return (
        <>
        {/* <h2>Handprint</h2> */}
        <div className='Handprint_Body'> 
            <div className='Handprint_Header'>
                <PageHead Page_Heading={'Handprint'} Page_Parafirst={'Home'} Page_Parasecond={'Handprint'} Page_Firstforward={'/'} />
            </div>
            <div className='Handprint_Content'>
                <div className='Handprint_Maincontent'>
                    <div className='Handprint_Leftcomponent'>
                        <div className='Handprint_Shop'>
                            <Shopcategory />
                        </div>
                        <div className='Handprint_Filter'>
                            <Filter />
                        </div>
                        <div className='Handprint_Rated'>
                            <Rated />
                        </div>
                        <div className='Handprint_Vases'>
                            <Vases />
                        </div>
                    </div>
                    <div className='Handprint_RightComponent'>
                        <h2>Right Components</h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export { Handprint };