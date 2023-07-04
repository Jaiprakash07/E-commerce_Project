import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Essentialcss/Bloglist.css';

function Bloglist({ BlogImage, Blogimg, Blogtitle }) {
    // console.log('Bloglist');
    return (
        <>
            <div className='Bloglist_Body'>
                <div className='Bloglist_Image'>
                    <NavLink className='Bloglist_Nav'>
                        <img className='Bloglist_Img' src={BlogImage} alt={Blogimg} />
                    </NavLink>
                </div>
                <div className='Bloglist_Content'>
                    <div className='Bloglist_Date'>
                        <span className='Bloglist_Datecomment'>13 May, 2022
                            <span className='Bloglist_Span'>0 comments</span>
                        </span>
                    </div>
                    <div className='Bloglist_Heading'>
                        <NavLink className='Bloglist_Headingnav'>
                            <h6 className='Bloglist_Title'>{Blogtitle}</h6>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bloglist;