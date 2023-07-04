import React from "react";
import PageHead from '../Essential/PageHead';
import Shopcategory from '../Essential/Shopcategory';
import Filter from "../Essential/Filter";
import Rated from '../Essential/Rated';
import Vases from '../Essential/Vases';
import '../Styles/Navpagecss/Stone.css';

function Stone() {
    // console.log('Stone')
    return (
        <>
            <div>
                {/* <h2>Stone</h2> */}
                <div className='Stone_Body'>
                    <div className='Stone_Header'>
                        <PageHead Page_Heading={'Stone'} Page_Parafirst={'Home'} Page_Parasecond={'Stone'}Page_Firstforward={'/'} />
                    </div>
                    <div className='Stone_Content'>
                        <div className='Stone_Maincontent'>
                            <div className='Stone_Leftcomponent'>
                                <div className='Stone_Shop'>
                                    <Shopcategory />
                                </div>
                                <div className="Stone_Filter">
                                    <Filter />
                                </div>
                                <div className='Stone_Rated'>
                                    <Rated />
                                </div>
                                <div className='Stone_Vases'>
                                    <Vases />
                                </div>
                            </div>
                            <div className='Stone_RightComponent'>
                                <h2>Right Components</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stone;