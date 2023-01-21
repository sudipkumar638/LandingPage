import React from 'react'
import "./style.css";
const Landing_page = () => {
    return (
        <div className='container-fluid text-center'>
            <nav className="navbar navbar-expand-lg bg-white fixed-top shadow ">
                <div className="container">

                    <div>
                        <img className='img-fluid logoimg' src="https://freewaysocial.com/wp-content/uploads/2019/09/hashtag-sticker.png" alt='hellp' />

                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-evenly align-items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 navmenu ">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Feature</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Clients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQs</a>
                            </li>
                        </ul>

                        <ul className='navbar-nav align-items-center  mb-2 mb-lg-0'>
                            <li className="nav-item  ">
                                <div className='buttn  ms-4 bg-transparent py-1'>
                                    <a href='#' className='' >Contact</a>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <div className='buttn py-1 bg-dark  text-center text-white ms-3'>
                                    <a className='freetrial' href='#'>Free Trial</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Landing_page