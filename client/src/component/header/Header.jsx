import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

const Header = (props) => {
    // State to hold the token
    const [token, setToken] = useState(localStorage.getItem('token'));
    const location = useLocation();

    // Effect to update the token in state when it changes in local storage
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    // Function to open the menu
    const menuTrigger = () => {
        document.querySelector(".header-wrapper").classList.toggle("menu-open");
    }

    // Function to close the menu
    const CLoseMenuTrigger = () => {
        document.querySelector(".header-wrapper").classList.remove("menu-open");
    }

    // Logout function
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        window.location.href = "/";
    };

    var elements = document.querySelectorAll('.has-droupdown > a');
    for (var i in elements) {
        if (elements.hasOwnProperty(i)) {
            elements[i].onclick = function () {
                this.parentElement.querySelector('.submenu').classList.toggle("active");
                this.classList.toggle("open");
            }
        }
    }

    const { logo, color = 'default-color' } = props;
    let logoUrl;
    if (logo === 'light') {
        logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Zeevoc" />;
    } else if (logo === 'dark') {
        logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Zeevoc" />;
    } else if (logo === 'symbol-dark') {
        logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Zeevoc" />;
    } else if (logo === 'symbol-light') {
        logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Zeevoc" />;
    } else {
        logoUrl = <img src="/assets/images/logo/logo.png" alt="Zeevoc" />;
    }

    return(
        <header className={`header-area formobile-menu header--transparent ${color}`}>
            <div className="header-wrapper" id="header-wrapper">
                <div className="header-left">
                    <div className="logo">
                        <a href="/">
                            {logoUrl}
                        </a>
                    </div>
                </div>
                <div className="header-right">
                    <nav className="mainmenunav d-lg-block">
                        <ul className="mainmenu">
                            {/* <li className="has-droupdown"><Link to="/">Home</Link>
                                <ul className="submenu">
                                    <li><Link to="/main-demo">Main Demo</Link></li>
                                    <li><Link to="/dark-main-demo">Main Demo Dark</Link></li>
                                    <li><Link to="/creative-agency">Creative Agency</Link></li>
                                    <li><Link to="/creative-landing">Creative One Page</Link></li>
                                    <li><Link to="/creative-portfolio">Creative Portfolio</Link></li>
                                    <li><Link to="/personal-portfolio">Personal Portfolio</Link></li>
                                    <li><Link to="/portfolio-landing">Portfolio One Page</Link></li>
                                    <li><Link to="/dark-portfolio-landing">Portfolio One Page 02</Link></li>
                                    <li><Link to="/digital-agency">Digital Agency</Link></li>
                                    <li><Link to="/startup">Startup</Link></li>
                                    <li><Link to="/paralax">Paralax</Link></li>
                                    <li><Link to="/portfolio-home">Minimal Portfolio</Link></li>
                                    <li><Link to="/business">Business</Link></li>
                                    <li><Link to="/home-particles">Home Particles</Link></li>
                                    <li><Link to="/studio-agency">Studio Agency</Link></li>
                                    <li><Link to="/designer-portfolio">Designer Portfolio</Link></li>
                                    <li><Link to="/interactive-agency">Interactive Agency</Link></li>
                                </ul>
                            </li> */}
                            <li><Link to="/" >Home</Link></li>
                            {/* <li className="has-droupdown"><Link to="/service" >Service</Link>
                                <ul className="submenu">
                                    <li><Link to="/service">Service</Link></li>
                                    <li><Link to="/service-details">Service Details</Link></li>
                                </ul>
                            </li>
                            <li className="has-droupdown"><Link to="/service" >Blog</Link>
                                <ul className="submenu">
                                    <li><Link to="/blog">Blog List</Link></li>
                                    <li><Link to="/blog-details">Blog Details</Link></li>
                                </ul>
                            </li>
                            <li className="has-droupdown"><Link to="#pages" >Portfolio</Link>
                                <ul className="submenu">
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                    <li><Link to="/404">404</Link></li>
                                </ul>
                            </li> */}
                            {/* <li className="has-droupdown"><Link to="#" >Blocks</Link>
                                <ul className="submenu">
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/team">Team</Link></li>
                                    <li><Link to="/service">Service</Link></li>
                                    <li><Link to="/video-popup">Video Popup</Link></li>
                                    <li><Link to="/progressbar">Progressbar</Link></li>
                                    <li><Link to="/gallery">Gallery</Link></li>
                                    <li><Link to="/counters">Counters</Link></li>
                                    <li><Link to="/blog">Blog List</Link></li>
                                    <li><Link to="/clint-logo">Clint Logo</Link></li>
                                    <li><Link to="/contact-form">Contact Form</Link></li>
                                    <li><Link to="/google-map">Google Map</Link></li>
                                    <li><Link to="/columns">Columns</Link></li>
                                    <li><Link to="/pricing-table">Pricing Table</Link></li>
                                </ul>
                            </li> */}
                            <li><Link to="/service" >Service</Link></li>
                            <li><Link to="/blog" >Blog</Link></li>
                            {/* <li><Link to="/portfolio" >Portfolio</Link></li> */}
                            <li><Link to="/products" >Products</Link></li>
                            <li><Link to="/contact" >Contact</Link></li>
                            <li><Link to="/about" >About</Link></li>
                            {(location.pathname !== '/login' && !token) && <li><Link to="/login">Login</Link></li>}
                            {/* {(location.pathname !== '/signup' && !token) && <li><Link to="/signup">Sign Up</Link></li>} */}
                            {token && <li onClick={logout} > <Link >Logout</Link></li>}
                            {/* <li><Link to="/signup" >Sign Up</Link></li> */}
                            {/* <li><Link to="/signup" >Sign Up</Link></li> */}
                        </ul>
                    </nav>
                    {/* <div className="header-btn">
                        <a className="rn-btn" href="/signup">
                            <span>Sign Up</span>
                        </a>
                    </div> */}
                    {/* Start Humberger Menu  */}
                    <div className="humberger-menu d-block d-lg-none pl--20">
                        <span onClick={menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                    </div>
                    {/* End Humberger Menu  */}
                    <div className="close-menu d-block d-lg-none">
                        <span onClick={CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;