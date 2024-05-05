import React, { Component } from "react";
import Slider from "react-slick";
import { slideSlick } from "../../page-demo/script";



const SlideList = [
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--15',
        category: '',
        title: 'Website Development',
        description: 'We specialize in website development, including Node.js and React, at an affordable price.',
        buttonText: 'Contact Us',
        buttonLink: '/blog'
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--12',
        category: '',
        title: 'Ecommerce Development',
        description: 'Looking to set up an ecommerce site? Let us help you with Magento 2 or Adobe Commerce solutions.',
        buttonText: 'Contact Us',
        buttonLink: '/blog'
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--14',
        category: '',
        title: 'Extension Development',
        description: 'Need custom features for your Magento 2 store? We provide expert Magento 2 extension development services.',
        buttonText: 'Contact Us',
        buttonLink: '/blog'
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--13',
        category: '',
        title: 'College Projects',
        description: 'We assist students in completing electrical/electronics college projects.',
        buttonText: 'Contact Us',
        buttonLink: '/blog'
    }
]
class SliderOne extends Component {
  render() {
    return (
        <div className="slider-activation">
            <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                {SlideList.map((value , index) => (
                    <div className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="8">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className={`inner ${value.textPosition}`}>
                                        {value.category ? <span>{value.category}</span> : ''}
                                        {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                        {value.description ? <p className="description">{value.description}</p> : ''}
                                        {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
  }
}
export default SliderOne;