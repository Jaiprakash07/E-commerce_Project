import React from 'react';
import '../Styles/Essentialcss/Button.css';

function Button({btnshop}) {
    // setInterval(() => {
    //     const buttonshop = document.querySelector('.buttonshop')
    //     // buttonshop.style.transition
    //     buttonshop.style.animation = 'ani 5s infinite';
    // }, 4000)
    // console.log('Button')
    return (
        <>
            <div className='buttonshop'>
                <button className='btnshop' style={btnshop}>Shop Now</button>
            </div>
        </>
    )
}

export default Button;