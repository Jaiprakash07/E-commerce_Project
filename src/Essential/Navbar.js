import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../Styles/Essentialcss/Navbar.css';

function Navbar() {
    const dropdesign = () => {
        // console.log('gdfs');
        // <Designdrop />
    }
    // console.log('Navbar')
    return (
        <>
            <div className='navbarparent'>
                <ul className='navbarchild'>
                    <li className='li'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='li designhov' onMouseOver={dropdesign}>
                        <NavLink too='/Design' className='dropdown' >Design</NavLink>
                        <div className='ss'>
                            <div className='desflex'>
                                <div className='desflex2'>
                                    <li className='lide'><Link too='/Design/Arts' className='linkss linkss1'>Arts</Link></li><br />
                                    <li><Link too='/Design/Arts/Architectureart' className='linkss'>Architecture Art</Link></li><br />
                                    <li><Link too='/Design/Arts/Literatureart' className='linkss'>Literature Art</Link></li><br />
                                    <li><Link too='/Design/Arts/Theaterart' className='linkss'>Theater Art</Link></li><br />
                                    <li><Link too='/Design/Arts/Ceramicsart' className='linkss'>Ceramics Art</Link></li><br />

                                </div>
                                <div className='desflex2'>
                                    <li className='lide'><Link too='/Design/Bonechina' className='linkss linkss1'>Bone China</Link></li><br />
                                    <li><Link too='/Design/Bonechina/Sculptureart' className='linkss'>Sculpture Art</Link></li><br />
                                    <li><Link too='/Design/Bonechina/Paintingart' className='linkss'>Painting Art</Link></li><br />
                                    <li><Link too='/Design/Bonechina/Glassetching' className='linkss'>Glass Etching</Link></li><br />
                                    <li><Link too='/Design/Bonechina/Glassblowing' className='linkss'>Glassblowing</Link></li><br />
                                </div>
                                <div className='desflex2'>
                                    <li className='lide'><Link too='/Design/Flowercrafts' className='linkss linkss1'>Flower Crafts</Link></li><br />
                                    <li><Link too='/Design/Flowercrafts/Daffodilcraft' className='linkss'>Daffodill Craft</Link></li><br />
                                    <li><Link too='/Design/Flowercrafts/Handprintcraft' className='linkss'>Handprint Craft</Link></li><br />
                                    <li><Link too='/Design/Flowercrafts/Furniturecrafts' className='linkss'>Furniture Crafts</Link></li><br />
                                    <li><Link too='/Design/Flowercrafts/Glasscrafts' className='linkss'>Glass Crafts</Link></li><br />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='li'>
                        <NavLink too='/Handprint'>Handprint</NavLink>
                    </li>
                    <li className='li'>
                        <NavLink too='/Ikebana'>Ikebana</NavLink>
                    </li>
                    <li className='li'>
                        <NavLink too='/Contactus'>Contact Us</NavLink>
                    </li>
                    <li className='li'>
                        <NavLink too='/Blog'>Blog</NavLink>
                    </li>
                    <li className='li listmore'>
                        <NavLink>More</NavLink>
                        <ul className='seconddrop'> 
                            <li className='listdro'><Link too='/Aboutus' className='linksss2'>About Us</Link></li>
                            <li className='listdro'><Link too='/Stone' className='linksss2'>Stoone</Link></li>
                            <li className='listdro'><Link too='/Fabrication' className='linksss2'>Fabrication</Link></li>
                            <li className='listdro'><Link too='/Catalog' className='linksss2'>Catalog</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

export { Navbar };