import React from 'react'
import "./firstsection.css";
const FirstSection = () => {
    return (
        <div className='container my-5'>
            <div className='row justify-content-around'>
                <div className=' col-lg-12 col-xl-7 col-xxl-6'>
                    <img className=' sideimage' src='https://miro.medium.com/max/1400/0*JFqEV_EOzIgLXtqb.jpeg'></img>
                </div>
                <div className=' texting col-lg-12 col-xl-5 col-xxl-5'>
                    <h3 className='fheading ms-4'>Social Media Marketing</h3>
                    <h1 className='realheading ms-4 my-4'>Start <span>Connecting</span>  with Your Online Customer</h1>
                    <p className=' my-3 ms-4'>Hashtag is a bright and result driven social media marketing drive Customers,grow your audience and expand your reach</p>
                    <div className='fbutton ms-4 text-center p-3'>
                        <a href='#' className='text-white '>Start Your Free Trial</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FirstSection