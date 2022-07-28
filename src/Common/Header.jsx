import React from 'react';
import {BiChevronDown} from 'react-icons/bi'
const Header = () => {
    return (
        <>
            <div className="header_section">

                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><span className='span1'>123</span>LOGO <br></br><span className='span2'>.</span><span className='span3'>COM</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SPORT BETTING <span><BiChevronDown/></span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACT US</a>
                                </li>

                                
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}



export default Header;