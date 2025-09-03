import React, { useState, useEffect, Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiSun, FiMoon, FiCheck } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import SliderTwo from "../component/slider/SliderTwo";
import ServiceTwo from "../elements/service/ServiceTwo";
import BrandTwo from "../elements/brand/BrandTwo";
import Helmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import { getAllBlogPosts } from "../api";
import { useTheme } from "../context/ThemeContext";

const MainDemo = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [namesItemOne, setNamesItemOne] = useState([
        'Expertise in Business Analytics',
        'Accelerated Business Growth',
        'Truth in Business Strategies',
        'Innovative Business Solutions'
    ]);
    const [namesItemTwo, setNamesItemTwo] = useState([
        'Proven Business Success',
        'Guidance for Business Owners',
        'Unlocking Business Potential'
    ]);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        // Fetch Blogs data
        const fetchData = async () => {
            try {
                const data = await getAllBlogPosts();
                setPostList(data.data.slice(0, 3));
            } catch (error) {
                console.error("Error fetching Blogs:", error);
            }
        };

        fetchData();
    }, []);

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <Fragment>
            <Helmet pageTitle="Zeevoc Digital" />
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            <div className="slider-wrapper">
                <SliderTwo />
            </div>

            <div className={isDarkTheme ? "active-dark" : "active-white"}>
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">About Us</h2>
                                        <p className="description">We're a team of passionate tech enthusiasts and engineers specializing in Magento and website development. At Zeevoc Digital, we're dedicated to innovation and building cutting-edge solutions.</p>
                                    </div>

                                    <div className="mt--30">
                                        <h4>Empowering Business Insights</h4>
                                        <ul className="list-style--1">
                                            {namesItemOne.map((name, index) => (
                                                <li key={index}><FiCheck /> {name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt--30">
                                        <h4>Driving Business Excellence</h4>
                                        <ul className="list-style--1">
                                            {namesItemTwo.map((name, index) => (
                                                <li key={index}><FiCheck /> {name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="thumbnail position-relative">
                                    <img className="w-100" src="/assets/images/about/about-3.png" alt="About Images" />
                                    {/* <ModalVideo channel='youtube' isOpen={isOpen} videoId='ZOoVOfieAF8' onClose={() => setIsOpen(false)} /> */}
                                    {/* <button className="video-popup position-top-center theme-color" onClick={openModal}><span className="play-icon"></span></button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service-area ptb--80  bg_image bg_image--3">
                    <div className="container">
                        <ServiceTwo />
                    </div>
                </div>

                <div className="rn-blog-area pt--120 pb--120 bg_color--1 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-left">
                                    <h2>Latest Blogs</h2>
                                    <p>
                                        Explore our latest insights and trends in the industry. Stay informed and ahead with our curated blog posts.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                                    <a className="btn-transparent rn-btn-dark" href="/blogs"><span className="text">View All Blogs</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60 mt_sm--40">
                            {postList.map((value, i) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href={`/blog/${value.urlKey}`}>
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href={`/blog/${value.urlKey}`}>{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href={`/blog/${value.urlKey}`}>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="rn-brand-area brand-separation">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                <div className="dark-theme">
                    <button onClick={toggleTheme} className="theme-toggle-button">
                        {isDarkTheme ? <FiSun size={24} /> : <FiMoon size={24} />}
                    </button>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
};

export default MainDemo;
