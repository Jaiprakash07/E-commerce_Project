import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Componentcss/Message.css';

function Message() {
    let as = true;
    let lis1 = document.querySelector('.lis1')
    let messdrop = document.querySelector('.messdrop')
    // console.log(messdrop2)
    function lang1(e) {
        lis1 = document.querySelector('.lis1').classList;
        messdrop = document.querySelector('.messdrop').classList;
        if (as === true) {
            console.log(1)
            if (e.target.className === 'active') {
                lis1.add('lis11')
                messdrop.add('messdropp')
                console.log('hi', e.target.parentNode)
            }
            else if (e.target.lastChild.className === 'messdrop') {
                lis1.add('lis11')
                messdrop.add('messdropp')
                console.log('hi2', e.target.lastChild)
            }
            as = false;
        }
        else if (as === false) {
            console.log(2)
            if (e.target.className === 'active') {
                lis1.remove('lis11')
                messdrop.remove('messdropp')
                console.log('hi', e.target.parentNode)
            }
            else if (e.target.lastChild.className === 'messdrop') {
                lis1.remove('lis11')
                messdrop.remove('messdropp')
                console.log('hi2', e.target.lastChild)
            }
            as = true;
        }
    }

    let lis2 = document.querySelector('.lis2')
    let messdrop2 = document.querySelector('.messdrop2')

    function lang2(e) {
        lis2 = document.querySelector('.lis2').classList;
        messdrop2 = document.querySelector('.messdrop2').classList;
        if (as === true) {
            console.log(1)
            if (e.target.className === 'active') {
                lis2.add('lis22')
                messdrop2.add('messdrop22')
                console.log('hi', e.target.parentNode)
            }
            else if (e.target.lastChild.className === 'messdrop2') {
                lis2.add('lis22')
                messdrop2.add('messdrop22')
                console.log('hi2', e.target.lastChild)
            }
            as = false;
        }
        else if (as === false) {
            console.log(2)
            if (e.target.className === 'active') {
                lis2.remove('lis22')
                messdrop2.remove('messdrop22')
                console.log('hi', e.target.parentNode)
            }
            else if (e.target.lastChild.className === 'messdrop2 MESS') {
                lis2.remove('lis22')
                messdrop2.remove('messdrop22')
                console.log('hi2', e.target.lastChild)
            }
            as = true;
        }
    }
    // console.log('Message')
    return (
        <>
            <div className='parent'>
                <div className='messparent'>
                    <p className='messchild'>We ship nationwide. 30-day return policy. Free standard shipping on orders over $75.</p>
                </div>
                <div className='messparent2'>
                    <div className='callparent'>
                        <p>Call Us Free 24/7: (+91) 012-345-6789</p>
                    </div>
                    <div className='navparent'>
                        <ul className='unorderednav'>
                            <li className='lis'>
                                <NavLink>Today's Deal</NavLink>
                            </li>
                            <hr className='lishr' />
                            <li className='lis'>
                                <NavLink>Contact Us</NavLink>
                            </li>
                            <hr className='lishr' />
                            <li className='lis lis1' onClick={lang1}>
                                <NavLink>USD $<span className='dropmessage'><i class="fa-solid fa-chevron-down"></i></span></NavLink>
                                <div className='messdrop'>
                                    <li className='mess2drop'>Canada (CAD $)</li>
                                    <li className='mess2drop'>France (EUR €)</li>
                                    <li className='mess2drop'>United States (USD $)</li>
                                </div>
                            </li>
                            <hr className='lishr' />
                            <li className='lis lis2' onClick={lang2}>
                                <NavLink>English<span className='dropmessage'><i class="fa-solid fa-chevron-down"></i></span></NavLink>
                                <div className='messdrop2' >
                                    <li className='messdrop3'>English</li>
                                    <li className='messdrop3'>Francais</li>
                                    <li className='messdrop3'>Nederlands</li>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Message };