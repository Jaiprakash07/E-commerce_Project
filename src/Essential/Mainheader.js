import React from 'react';
// import { Outlet } from 'react-router-dom';
import { Message } from '../Components/Message';
import { Navheader } from '../Essential/Navheader';

function Mainheader() {
    // console.log('Mainheader')
    return(
        <>
        <Message />
        <Navheader />
        {/* <Outlet/ > */}
        </>
    )
}

export { Mainheader }