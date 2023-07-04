import React from 'react';
// import { useLocation } from 'react-router-dom';
import PageHead from '../Essential/PageHead';
import Shopcategory from '../Essential/Shopcategory';
import Rated from '../Essential/Rated';
import Vases from '../Essential/Vases';
import '../Styles/Navpagecss/Design.css';
import { NavLink } from 'react-router-dom';
import Filter from '../Essential/Filter';
import { Productlist } from '../Essential/Productlist';

function Design() {
    // const location = useLocation()
    // console.log(location.state);

    function Designcreatecart_Comp() {
        const Designunorder_list = document.querySelector('.Designunorder_list')
        const li = document.createElement('li')
        // li.innerHTML= <Productlist />
        // const aman = document.createTextNode('Productlist')
        // li.appendChild(aman)
        Designunorder_list.appendChild(li)
        // li.innerHTML = `${<Productlist/>}`
        console.log(Designunorder_list)
        return <li><Productlist /></li>
    }

    console.log('Design')
    return (
        <>
            <div className='Design_Body'>
                <div className='Design_Header'>
                    <PageHead Page_Heading={'Design'} Page_Parafirst={'Home'} Page_Parasecond={'Design'} Page_Firstforward={'/'} Page_Secondforward={'/Design'} />
                </div>
                <div className='Design_Content'>
                    <div className='Design_Maincontent'>
                        <div className='Design_Leftcomponent'>
                            <div className='Design_Shop'>
                                <Shopcategory />
                            </div>
                            <div className='Design_Filter'>
                                <Filter />
                            </div>
                            <div className='Design_Rated'>
                                <Rated />
                            </div>
                            <div className='Design_Vases'>
                                <Vases />
                            </div>
                        </div>
                        <div className='Design_RightComponent' style={{width: '1200px', display: 'flex', flexWrap: 'wrap', margin: '0px', padding: '0px'}}>
                            <h2 onClick={Designcreatecart_Comp}>Right Components</h2>
                            <ul className='Designunorder_list'>
                                {/* <li><Productlist /></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Design };