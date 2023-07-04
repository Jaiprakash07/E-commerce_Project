import React, { useRef } from 'react';
import { Productlist } from '../Essential/Productlist';
import '../Styles/Componentcss/Secproduct.css';

function Secproduct() {
    const secslide = useRef();
    function secleft() {
        secslide.current.scrollLeft -= 150;
    }

    function secright() {
        secslide.current.scrollLeft += 150;
    }
    // console.log('Secproduct')
    return (
        <>
            <div className='Secpro_Body'>
                <div className='Secpro_Head'>
                    <div className='Secpro_Heading'>
                        <h4>Featured Products</h4>
                    </div>
                    <div className='Secpro_Button'>
                        <div className="Secpro_but">
                            <button onClick={secleft}><i class="fa-solid fa-caret-left"></i></button>
                        </div>
                        <div className="Secpro_but">
                            <button onClick={secright}><i class="fa-solid fa-caret-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className='Secpro_List' ref={secslide}>
                <Productlist Pro_Img={''} Pro_Title={'fakeimgname'} Pro_Price={'$250.00 '} Pro_Unprice={'$290.00'} Pro_Span={'Sale'} Pro_Divspan={'-13%'} />
                <Productlist Pro_Img={''} Pro_Title={'fakeimgname'} Pro_Price={'$250.00 '} Pro_Hide={'Prolist_Hide'} />
                <Productlist Pro_Img={''} Pro_Title={'fakeimgname'} Pro_Price={'$120.00 '} Pro_Unprice={'$230.00'} Pro_Span={'Sale'} Pro_Divspan={'-47%'} />
                <Productlist Pro_Img={''} Pro_Title={'fakeimgname'} Pro_Price={'$300.00 '} Pro_Unprice={'$390.00'} Pro_Span={'Sale'} Pro_Divspan={'-23%'} />
                <Productlist Pro_Img={''} Pro_Title={'fakeimgname'} Pro_Price={'$250.00 '} Pro_Hide={'Prolist_Hide'} />
                <Productlist Pro_Img={''} Pro_Title={'fakeimgname'} Pro_Price={'$85.00 '} Pro_Unprice={'$97.00'} Pro_Span={'Sale'} Pro_Divspan={'-12%'} />
                <Productlist Pro_Img={''} Pro_Title={'fakeimgname'} Pro_Price={'$180.00 '} Pro_Hide={'Prolist_Hide'} />
                <Productlist Pro_Img={''} Pro_Title={'fakeimgname'} Pro_Price={'$70.00 '} Pro_Unprice={'$75.00'} Pro_Span={'Sale'} Pro_Divspan={'-6%'} />
                <Productlist Pro_Img={''} Pro_Title={'fakeimgname'} Pro_Price={'$90.00 '} Pro_Unprice={'$97.00'} Pro_Span={'Sale'} Pro_Divspan={'-7%'} />
                <Productlist Pro_Img={''} Pro_Title={'fakeimgname'} Pro_Price={'$240.00 '} Pro_Hide={'Prolist_Hide'} />
                </div>
            </div>
        </>
    )
}

export default Secproduct;