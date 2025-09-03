import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"; // Import useParams hook
import PageHelmet from "../../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { getServiceByUrlKey } from "../../api"; // Import the API function

const ServiceDetails = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [breadcrumbData, setBreadcrumbData] = useState({});
    const location = useLocation();

    const serviceId = location.pathname.split('/').pop();
    const openModal = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        const fetchData = async (urlKey) => { // Modify fetchData to accept ID as a parameter
            try {
                const response = await getServiceByUrlKey(urlKey); // Pass the service ID
                setBreadcrumbData(response.data); // Assuming the response contains breadcrumb data
            } catch (error) {
                console.error("Error fetching breadcrumb data:", error);
            }
        };

        fetchData(serviceId); // Call fetchData with the service ID
    }, [serviceId]); // Include serviceId in the dependency array
    return (
        <React.Fragment>
            {/* Start Pagehelmet  */}
            <PageHelmet pageTitle='Service Details' />
            {/* End Pagehelmet  */}

            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--1" data-black-overlay="5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title theme-gradient">{breadcrumbData.title}</h2>
                                <p>{breadcrumbData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper */}
            <div className="rn-service-details ptb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-details-inner">
                                <div className="inner">
                                    {/* Start Single Area */}
                                    <div className="row sercice-details-content pb--80 align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="thumb">
                                                <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">

                                            <div className="details mt_md--30 mt_sm--30">
                                                <h2 className="title">Extension Development</h2>

                                                <p>but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing</p>
                                                <p>hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p>
                                                <h4 className="title">Proceess of metel</h4>
                                                <ul className="liststyle">
                                                    <li>Yet this above sewed flirted opened ouch</li>
                                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                                    <li>Abominable this abidin far successfully then like piquan</li>
                                                    <li>Risus commodo viverra</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Area */}

                                    {/* Start Single Area temperoarily removed */}
                                    {/* <div className="row sercice-details-content align-items-center">
                                        <div className="col-lg-6 col-12 order-2 order-lg-1">
                                            <div className="details mt_md--30 mt_sm--30">
                                                <p>but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing</p>
                                                <p>hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p>
                                                <h4 className="title">Our Working Process</h4>
                                                <ul className="liststyle">
                                                    <li>Yet this above sewed flirted opened ouch</li>
                                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                                    <li>Abominable this abidin sfar successfully then like piquan</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 order-1 order-lg-2">
                                            <div className="thumb position-relative">
                                                <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images" />
                                                <ModalVideo
                                                    channel='youtube'
                                                    isOpen={isOpen}
                                                    videoId='ZOoVOfieAF8'
                                                    onClose={() => setIsOpen(false)}
                                                />
                                                <button className="video-popup" onClick={openModal}><span className="play-icon"></span></button>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* End Single Area */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Page Wrapper */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <Footer />

            {/* Modal Video */}
            <ModalVideo
                channel='youtube'
                isOpen={isOpen}
                videoId='ZOoVOfieAF8'
                onClose={() => setIsOpen(false)}
            />
            {/* End Modal Video */}
        </React.Fragment>
    );
};

export default ServiceDetails;
