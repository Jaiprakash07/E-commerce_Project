import React from 'react';
import PageHead from '../Essential/PageHead';
import Shopcategory from '../Essential/Shopcategory';
import Rated from '../Essential/Rated';
import Vases from '../Essential/Vases';
import '../Styles/Navpagecss/Blog.css';

function Blog() {
    return(
        <>
        {/* <h2>Blog</h2> */}
        <div className='Blog_Body'> 
            <div className='desi_Header'>
                <PageHead Page_Heading={'Recent_Blogs'} Page_Parafirst={'Home'} Page_Parasecond={'Blog'} Page_Parathird= {'Recent Blogs'}  Pagenav_Second={'Page_Manmadeclass'} Page_Firstforward={'/'} />
            </div>
            <div className='Blog_Content'>
                <div className='Blog_Maincontent'>
                    <div className='Blog_Leftcomponent'>
                        <div className='Blog_Shop'>
                            <Shopcategory />
                        </div>
                        <div className='Blog_Vases'>
                            <Vases />
                        </div>
                    </div>
                    <div className='Blog_RightComponent'>
                        <h2>Right Components</h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export { Blog };