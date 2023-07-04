import React from "react";
import PageHead from '../Essential/PageHead';
import Shopcategory from '../Essential/Shopcategory';
import Filter from "../Essential/Filter";
import Rated from '../Essential/Rated';
import Vases from '../Essential/Vases';
import '../Styles/Navpagecss/Catalog.css';

function Catalog() {
    // console.log('Catalog')
    return (
        <>
        <div>
            {/* <h2>Catalog</h2> */}
            <div className='Catalog_Body'> 
            <div className='Catalog_Header'>
                <PageHead Page_Heading={'Products'} Page_Parafirst={'Home'} Page_Parasecond={'Catalog'} Page_Firstforward={'/'}/>
            </div>
            <div className='Catalog_Content'>
                <div className='Catalog_Maincontent'>
                    <div className='Catalog_Leftcomponent'>
                        <div className='Catalog_Shop'>
                            <Shopcategory />
                        </div>
                        <div className="Catalog_Filter">
                            <Filter />
                        </div>
                        <div className='Catalog_Rated'>
                            <Rated />
                        </div>
                        <div className='Catalog_Vases'>
                            <Vases />
                        </div>
                    </div>
                    <div className='Catalog_RightComponent'>
                        <h2>Right Components</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Catalog;