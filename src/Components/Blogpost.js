import React, { useEffect, useRef } from 'react';
import '../Styles/Componentcss/Blogpost.css';
import Bloglist from '../Essential/Bloglist';
import Brand from '../Essential/Brand';

function Blogpost() {

    const Blog_ref = useRef();
    const Blog_brand = useRef();

    function blogleft() {
        Blog_ref.current.scrollLeft -= 200;
    }

    function blogright() {
        Blog_ref.current.scrollLeft += 200;
    }

    let Blogimg_A = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/articles/blog-1_e8bfb772-4f71-48d0-b630-f3e5f796b58e_910x686.jpg?v=1652511324';
    let Blogimg_B = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/articles/blog-2_fb7271dc-a520-453b-b316-1758c16cc451_910x686.jpg?v=1652511347';
    let Blogimg_C = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/articles/blog-3_b73292b8-fe22-45f7-bee9-bcb7438e43ca_910x686.jpg?v=1652511363';
    let Blogimg_D = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/articles/blog-4_910x686.jpg?v=1652511394';
    let Blogimg_E = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/articles/blog-5_910x686.jpg?v=1652511416';
    let Blogimg_F = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/articles/blog-6_910x686.jpg?v=1652511432';

    let Blog_desA = 'Artsy Shark is one of the most innovative art blogs on this list.';
    let Blog_desB = 'Open Space, as the name suggests, is a platform for artists, writers, photographers.';
    let Blog_desC = 'The Art League Blog is one of the largest and the best art blogs in the United States of America.';
    let Blog_desD = 'Spoke Art is an Art gallery in San Francisco. It also publishes articles, reviews, and news.';
    let Blog_desE = 'The Lost Art Press was founded in 2007 by two woodworkers.';
    let Blog_desF = 'Cass Art aims to inspire and propel new artists to the forefront.';

    let Brand_imgA = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/brand-6@2x.png?v=1652439816';
    let Brand_imgB = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/brand-2_2633c68b-39a6-4bf9-81c4-5b3d957679f2@2x.png?v=1652439828';
    let Brand_imgC = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/brand-3@2x.png?v=1652439785';
    let Brand_imgD = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/brand-4@2x.png?v=1652439796';
    let Brand_imgE = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/brand-5@2x.png?v=1652439805';

    let br;
    useEffect(() => {
        br = setInterval(brandslide, 5000)
    })

    function brandslide() {
        Blog_brand.current.scrollLeft += 204;

        let dd = new Date().getMilliseconds();
        // console.log(dd)
        if (dd === '00') {
            // console.log(dd)
            clearInterval(br)
        }
        else if (Blog_brand.current.scrollLeft >= 620) {
            function rebrand() {
                // console.log  ('2', dd)
                // let scrollLeft = 0;
                const Blogpost_Brand = document.querySelector('.Blogpost_Brand')
                Blogpost_Brand.scrollLeft = 0;
                Blogpost_Brand.style.scrollBehavior = 'smooth';
                Blogpost_Brand.style.scrollSnapType = 'x mandatory';
            }
            rebrand();
        }
    }
    // console.log('Blogpost')
    return (
        <>
            <div className='Blogpost_Body'>
                <div className='Blogpost_Head'>
                    <div className='Blogpost_Heading'>
                        <h5>Latest Blogs</h5>
                    </div>
                    <div className='Blogpost_Button'>
                        <div className='Blogpost_Btn'>
                            <button className='Blogpost_but' onClick={blogleft}><i class="fa-solid fa-caret-left"></i></button>
                        </div>
                        <div className='Blogpost_Btn'>
                            <button className='Blogpost_but' onClick={blogright}><i class="fa-solid fa-caret-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className='Blogpost_Content' ref={Blog_ref}>
                    <Bloglist BlogImage={Blogimg_A} Blogimg={'Artsy-Shark'} Blogtitle={Blog_desA} />
                    <Bloglist BlogImage={Blogimg_B} Blogimg={'Open-Space'} Blogtitle={Blog_desB} />
                    <Bloglist BlogImage={Blogimg_C} Blogimg={'Art-League'} Blogtitle={Blog_desC} />
                    <Bloglist BlogImage={Blogimg_D} Blogimg={'Art-League'} Blogtitle={Blog_desD} />
                    <Bloglist BlogImage={Blogimg_E} Blogimg={'Art-League'} Blogtitle={Blog_desE} />
                    <Bloglist BlogImage={Blogimg_F} Blogimg={'Art-League'} Blogtitle={Blog_desF} />
                </div>
                <div className='Blogpost_Brand' ref={Blog_brand} >
                    <Brand Brand_Img={Brand_imgA} Brand_Name={'Goodness'} />
                    <Brand Brand_Img={Brand_imgB} Brand_Name={'George'} />
                    <Brand Brand_Img={Brand_imgC} Brand_Name={'Parker'} />
                    <Brand Brand_Img={Brand_imgD} Brand_Name={'Dots'} />
                    <Brand Brand_Img={Brand_imgE} Brand_Name={'HHS'} />
                    <Brand Brand_Img={Brand_imgA} Brand_Name={'Goodness'} />
                    <Brand Brand_Img={Brand_imgB} Brand_Name={'Geroge'} />
                    <Brand Brand_Img={Brand_imgC} Brand_Name={'Parker'} />
                    <Brand Brand_Img={Brand_imgD} Brand_Name={'Dots'} />
                    <Brand Brand_Img={Brand_imgE} Brand_Name={'HHS'} />
                </div>
            </div>
        </>
    )
}

export default Blogpost;