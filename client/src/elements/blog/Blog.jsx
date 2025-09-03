import React from "react";
import PageHelmet from "../../component/common/Helmet";
import Breadcrumb from "../common/Breadcrumb";
import BlogList from "./BlogList";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { useTheme } from "../../context/ThemeContext";

const Blog = () => {
  const { isDarkTheme } = useTheme();
    return (
        <React.Fragment>
            <div className={isDarkTheme ? "active-dark" : "active-white"}>
                <PageHelmet pageTitle="Blog" />

                <Header
                    headertransparent="header--transparent"
                    colorblack="color--black"
                    logoname="logo.png"
                />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={"Blogs"} />
                {/* End Breadcrump Area */}

                {/* Start Blog Area */}
                <div className="rn-blog-area pt--100 pb--70 bg_color--1">
                    <div className="container">
                        <BlogList />
                        {/* <div className="row mt--20">
                            <div className="col-lg-12">
                                <Pagination />
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* End Blog Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Blog;
