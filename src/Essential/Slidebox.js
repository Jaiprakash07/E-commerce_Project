import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Essentialcss/Slidebox.css';

function Slidebox({ boxname, boxitemno, boximg }) {
    // console.log('Slidebox')
    return (
        <>
            <div className='slidebodies'>
                <NavLink className='navslide'>
                    <div className='boximage'>
                        <img src={boximg} alt='fakeapiimg' />
                    </div>
                    <div className='boxname'>
                        <h4 className='h1slide'>{boxname}</h4>
                    </div>
                    <div className='boxitem'>
                    <span>{boxitemno}</span>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export { Slidebox };