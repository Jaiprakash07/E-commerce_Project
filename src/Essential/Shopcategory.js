import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Essentialcss/Shopcategory.css';

function Shopcategory() {

    let plus = 11;
    function OpenDesign() {
        const Shop_Midlistcontent = document.querySelector('.Shop_Midlistcontent').classList;
        const Design_Add = document.querySelector('.Design_Add');
        const Design_Minus = document.querySelector('.Design_Minus');
        if (plus === 11) {
            Shop_Midlistcontent.add('Shop_Midlistcontentagain')
            Design_Add.style.display = 'none';
            Design_Minus.style.display = 'block';
            plus = 22;
        }
        else if (plus === 22) {
            Shop_Midlistcontent.remove('Shop_Midlistcontentagain')
            Design_Add.style.display = 'block';
            Design_Minus.style.display = 'none';
            plus = 11;
        }
    }

    let Artsplus = 10
    function OpenDesignarts() {
        const Shop_Endarts = document.querySelector('.Shop_Endarts').classList;
        const Design_addarts = document.querySelector('.Design_addarts');
        const Design_minusarts = document.querySelector('.Design_minusarts');
        if (Artsplus === 10) {
            Shop_Endarts.add('Shop_Endcontentarts')
            Design_addarts.style.display = 'none';
            Design_minusarts.style.display = 'block';
            Artsplus = 20;
        }
        else if (Artsplus === 20) {
            Shop_Endarts.remove('Shop_Endcontentarts')
            Design_addarts.style.display = 'block';
            Design_minusarts.style.display = 'none';
            Artsplus = 10;
        }
    }

    let Boneplus = 1
    function OpenDesignbone() {
        const Shop_Endbone = document.querySelector('.Shop_Endbone').classList;
        const Design_addbone = document.querySelector('.Design_addbone');
        const Design_minusbone = document.querySelector('.Design_minusbone');
        if (Boneplus === 1) {
            Shop_Endbone.add('Shop_Endcontentbone')
            Design_addbone.style.display = 'none';
            Design_minusbone.style.display = 'block';
            Boneplus = 2;
        }
        else if (Boneplus === 2) {
            Shop_Endbone.remove('Shop_Endcontentbone')
            Design_addbone.style.display = 'block';
            Design_minusbone.style.display = 'none';
            Boneplus = 1;
        }
    }

    let Flowerplus = 27;
    function OpenDesignflower() {
        const Shop_Endflower = document.querySelector('.Shop_Endflower').classList;
        const Design_addflower = document.querySelector('.Design_addflower');
        const Design_minusflower = document.querySelector('.Design_minusflower');
        if (Flowerplus === 27) {
            Shop_Endflower.add('Shop_Endcontentflower')
            Design_addflower.style.display = 'none';
            Design_minusflower.style.display = 'block';
            Flowerplus = 28;
        }
        else if (Flowerplus === 28) {
            Shop_Endflower.remove('Shop_Endcontentflower')
            Design_addflower.style.display = 'block';
            Design_minusflower.style.display = 'none';
            Flowerplus = 27;
        }
    }

    // console.log('Shopcategory')
    return (
        <>
            <div className='Shop_Body'>
                <div className='Shop_Head'>
                    <h5 className='Shop_heading'>Shop By Categories</h5>
                </div>
                <div className='Shop_Listcontent'>
                    <ul className='Shop_Mainunorderlist'>
                        <li className='Shop_Mainlists'>
                            <NavLink to='/Design' className='Design_Nav'>Design</NavLink>
                            <span className='Design_Add' onClick={OpenDesign}>+</span>
                            <span className='Design_Minus' onClick={OpenDesign}>-</span>
                            <div className='Shop_Midlistcontent'>
                                <ul className='Shop_Midunorderlist'>
                                    <li className='Shop_Midlists'>
                                        <NavLink to='/Design/Arts' className='Designarts_Nav'>Arts</NavLink>
                                        <span className='Design_addarts' onClick={OpenDesignarts}>+</span>
                                        <span className='Design_minusarts' onClick={OpenDesignarts}>-</span>
                                        <div className='Shop_Endcontent Shop_Endarts'>
                                            <ul className='Shop_Endunorderlist'>
                                                <li className='Shop_Endlists'>
                                                    <NavLink to='/Design/Arts/Architectureart' className='Shop_Endnav'>Architecture Art</NavLink>
                                                </li>
                                                <li className='Shop_Endlists'>
                                                    <NavLink to='/Design/Arts/Literatureart' className='Shop_Endnav'>Literature Art</NavLink>
                                                </li>
                                                <li className='Shop_Endlists'>
                                                    <NavLink to='/Design/Arts/Theaterart' className='Shop_Endnav'>Theater Art</NavLink>
                                                </li>
                                                <li className='Shop_Endlists'>
                                                    <NavLink to='/Design/Arts/Ceramicsart' className='Shop_Endnav'>Ceramics Art</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='Shop_Midlists'>
                                        <NavLink to='/Design/Bonechina' className='Designbone_Nav'>Bone China</NavLink>
                                        <span className='Design_addbone' onClick={OpenDesignbone}>+</span>
                                        <span className='Design_minusbone' onClick={OpenDesignbone}>-</span>
                                        <div className='Shop_Endcontent Shop_Endbone'>
                                            <ul className='Shop_Endunorderlist'>
                                                <li className='Shop_Endlists'>
                                                    <NavLink to='/Design/Bonechina/Sculptureart' className='Shop_Endnav'>Sculpture Art</NavLink>
                                                </li>
                                                <li className='Shop_Endlists'>
                                                    <NavLink to='/Design/Bonechina/Paintingart' className='Shop_Endnav'>Painting Art</NavLink>
                                                </li>
                                                <li className='Shop_Endlists'>
                                                    <NavLink to='/Design/Bonechina/Glassetching' className='Shop_Endnav'>Glass Etching</NavLink>
                                                </li>
                                                <li className='Shop_Endlists'>
                                                    <NavLink to='/Design/Bonechina/Glassblowing' className='Shop_Endnav'>Glassblowing</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='Shop_Midlists'>
                                        <NavLink to='/Design/Flowercrafts' className='Designflower_Nav'>Flower Crafts</NavLink>
                                        <span className='Design_addflower' onClick={OpenDesignflower}>+</span>
                                        <span className='Design_minusflower' onClick={OpenDesignflower}>-</span>
                                        <div className='Shop_Endcontent Shop_Endflower'>
                                            <ul className='Shop_Endunorderlist'>
                                                <li className='Shop_Endlists'>
                                                    <NavLink to='/Design/Flowercrafts/Daffodilcraft' className='Shop_Endnav'>Daffodil Craft</NavLink>
                                                </li>
                                                <li className='Shop_Endlists'>
                                                    <NavLink to='/Design/Flowercrafts/Handprintcraft' className='Shop_Endnav'>Handprint Craft</NavLink>
                                                </li>
                                                <li className='Shop_Endlists'>
                                                    <NavLink to='/Design/Flowercrafts/Furniturecrafts' className='Shop_Endnav'>Furniture Crafts</NavLink>
                                                </li>
                                                <li className='Shop_Endlists'>
                                                    <NavLink to='/Design/Flowercrafts/Glasscrafts' className='Shop_Endnav'>Glass Crafts</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='Shop_Mainlists'>
                            <NavLink to='/Handprint' className='Handprint_Nav'>Handprint</NavLink>
                        </li>
                        <li className='Shop_Mainlists'>
                            <NavLink to='/Ikebana' className='Ikebana_Nav'>Ikebana</NavLink>
                        </li>
                        <li className='Shop_Mainlists'>
                            <NavLink to='/Stone' className='Stone_Nav'>Stone</NavLink>
                        </li>
                        <li className='Shop_Mainlists'>
                            <NavLink to='/Fabrication' className='Fabrication_Nav'>Fabrication</NavLink>
                        </li>
                        <li className='Shop_Mainlists'>
                            <NavLink to='/Design/Arts/Literatureart' className='Literature_Nav'>Literature Art</NavLink>
                        </li>
                        <li className='Shop_Mainlists'>
                            <NavLink to='/Design/Bonechina/Paintingart' className='Painting_Nav'>Painting Art</NavLink>
                        </li>
                        <li className='Shop_Mainlists'>
                            <NavLink to='/Design/Flowercrafts' className='Flower_Nav'>Flower Crafts</NavLink>
                        </li>
                        <li className='Shop_Mainlists'>
                            <NavLink to='/Design/Bonechina/Glassetching' className='Glass_Nav'>Glass Etching</NavLink>
                        </li>
                        <li className='Shop_Mainlists'>
                            <NavLink to='/Design/Arts/Theaterart' className='Theater_Nav'>Theater Art</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Shopcategory;