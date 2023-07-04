import React from 'react';
import PageHead from '../Essential/PageHead';
import Shopcategory from '../Essential/Shopcategory';
import Filter from '../Essential/Filter';
import Rated from '../Essential/Rated';
import Vases from '../Essential/Vases';
import '../Styles/Navpagecss/Ikebana.css';

function Ikebana() {
    return (
        <>
        {/* <h2>Ikebana</h2> */}
        <div className='Ikebana_Body'> 
            <div className='Ikebana_Header'>
                <PageHead Page_Heading={'Ikebana'} Page_Parafirst={'Home'} Page_Parasecond={'Ikebana'} Page_Firstforward={'/'} />
            </div>
            <div className='Ikebana_Content'>
                <div className='Ikebana_Maincontent'>
                    <div className='desi_Leftcomponent'>
                        <div className='Ikebana_Shop'>
                            <Shopcategory />
                        </div>
                        <div className='Ikebana_Filter'>
                            <Filter />
                        </div>
                        <div className='Ikebana_Rated'>
                            <Rated />
                        </div>
                        <div className='Ikebana_Vases'>
                            <Vases />
                        </div>
                    </div>
                    <div className='Ikebana_RightComponent'>
                        <h2>Right Components</h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export { Ikebana };