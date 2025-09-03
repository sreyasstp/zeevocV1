import React, { useState, useEffect, useRef } from "react";
import { FiClock, FiUser, FiMessageCircle, FiHeart, FiCopy } from "react-icons/fi";
import { Link, useParams } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import ModalVideo from 'react-modal-video';
import PageHelmet from "../../component/common/Helmet";
import { getBlogByUrlKey } from "../../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogDetails = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [blogData, setBlogData] = useState({});
    const { urlKey } = useParams();
    const contentRef = useRef(null);

    const openModal = () => {
        setIsOpen(true);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            toast.success("Copied to clipboard!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000
            });
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getBlogByUrlKey(urlKey);
                setBlogData(response.data);
                // Prism.highlightAll();
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        fetchData();
    }, [urlKey]);

    useEffect(() => {
        if (contentRef.current) {
            const copyButtons = contentRef.current.querySelectorAll('.copy-button');
            copyButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const text = e.target.getAttribute('data-copy');
                    copyToClipboard(text);
                });
            });
        }
    }, [blogData]);

    return (
        <React.Fragment>
            <PageHelmet pageTitle={blogData.title} />
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--1" data-black-overlay="7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-single-page-title text-center pt--100">
                                <h2 className="title theme-gradient">{blogData.title}</h2>
                                <ul className="blog-meta d-flex justify-content-center align-items-center">
                                    <li><FiClock />{new Date(blogData.created_at).toLocaleDateString()}</li>
                                    <li><FiUser />{blogData.author || "Zeevoc Team"}</li>
                                    <li><FiMessageCircle />{blogData.comments_count || "0"} Comments</li>
                                    <li><FiHeart />Like</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrump Area */}

            {/* Start Blog Details */}
            <div className="rn-blog-details pt--50 pb--70 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-wrapper">
                                <div className="inner" ref={contentRef}>
                                    <div dangerouslySetInnerHTML={{ __html: blogData.html_content }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Details */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <Footer />
            <ToastContainer />
        </React.Fragment>
    );
};

export default BlogDetails;
