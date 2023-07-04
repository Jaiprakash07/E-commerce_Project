import React from "react";
import PageHead from '../Essential/PageHead';
import Shopcategory from '../Essential/Shopcategory';
import Filter from "../Essential/Filter";
import Rated from '../Essential/Rated';
import Vases from '../Essential/Vases';
import '../Styles/Navpagecss/Fabrication.css';

function Fabrication() {
    // console.log('Fabrication')
    return (
        <>
            <div>
                {/* <h2>Fabrication</h2> */}
                <div className='Fabrication_Body'>
                    <div className='Fabrication_Header'>
                        <PageHead Page_Heading={'Fabrication'} Page_Parafirst={'Home'} Page_Parasecond={'Fabrication'} Page_Firstforward={'/'}/>
                    </div>
                    <div className='Fabrication_Content'>
                        <div className='Fabrication_Maincontent'>
                            <div className='Fabrication_Leftcomponent'>
                                <div className='Fabrication_Shop'>
                                    <Shopcategory />
                                </div>
                                <div className="Fabrication_Filter">
                                    <Filter />
                                </div>
                                <div className='Fabrication_Rated'>
                                    <Rated />
                                </div>
                                <div className='Fabrication_Vases'>
                                    <Vases />
                                </div>
                            </div>
                            <div className='Fabrication_RightComponent'>
                                <h2>Right Components</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fabrication;