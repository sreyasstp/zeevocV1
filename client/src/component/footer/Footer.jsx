import React, { Component } from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SocialShare = [
    { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/zeevoc-digital' },
    { Social: <FaYoutube />, link: 'https://www.youtube.com/zeevocdigital' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/zeevoc_digital' },
    // {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>Ready To Do This</span>
                                        <h2>Let's get <br /> to work</h2>
                                        <a className="rn-button-style--2" href="/contact">
                                            <span>Contact Us</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Quick Links</h4>
                                                <ul className="ft-link">
                                                    {/* <li><a href="/portfolio">Portfolio</a></li> */}
                                                    {/* <li><a href="/about">About</a></li> */}
                                                    {/* <li><a href="/contact">Let's Talk</a></li> */}
                                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                                    <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                                                    <li><a href="/refund-policy">Refund Policy</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Say Hello</h4>
                                                <ul className="ft-link">
                                                    <li><a href="/contact">Let's Talk</a></li>
                                                    <li><a href="mailto:zeevocdigital@gmail.com">zeevocdigital@gmail.com</a></li>
                                                    {/* <li><a href="mailto:zeevocenterprise@gmail.com">zeevocenterprise@gmail.com</a></li> */}
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val, i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Copyright © 2024 Zeevoc Digital. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;