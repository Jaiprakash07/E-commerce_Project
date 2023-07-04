import React from 'react';
import Button from '../Essential/Button';
import '../Styles/Essentialcss/Minibanner.css';

function Minibanner({ Mini_offer, Mini_title, Mini_img}) {
    // console.log('Minibanner')
    return (
        <>
            <div className='Mini_Body'>
                <div className='Mini_Backimg'>
                    <img src={Mini_img} alt='fake'/>
                </div>
                <div className='Mini_Content'>
                    <div className='Mini_Discount'>
                        <h5>{Mini_offer}</h5>
                    </div>
                    <div className='Mini_Name'>
                        <h2>{Mini_title}</h2>
                    </div>
                    <div className='Mini_Btn'>
                        <Button />
                    </div>
                </div>
            </div>
        </>
    )
}

export { Minibanner };