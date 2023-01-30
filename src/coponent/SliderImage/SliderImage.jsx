import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
// import Slider from "slick-carousel";


import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.scss"
import PopperWrapper from '../PopperWapper/PopperWrapper';


SliderImage.propTypes = {

};




function SliderImage({ dataSlider }) {
    const [nav1, setNav1] = useState()
    const [nav2, setNav2] = useState();
    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);


    }, []);



    const settingSlider1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        autoplay: true,
        speed: 1000,
        // autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 442,
                settings: {

                    arrows: false
                }
            },]






    }


    const settingSlider2 = {
        asNavFor: nav1,
        ref: slider2,

        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 442,
                settings: {

                    slidesToShow: 2
                }
            },]
    }












    return (
        <div className='slider-image-wrapper'>

            <div className='slider-main'>

                <Slider  {...settingSlider1} asNavFor={nav2} ref={slider1}>


                    {dataSlider.map((item) => {


                        return (
                            <PopperWrapper key={item.id} bigShadow>
                                <div className="slider-item">
                                    <img className='slider-img' src={item.image} alt="" />
                                </div>
                            </PopperWrapper>
                        )

                    })}



                </Slider>

            </div>


            <div className='slider-sub'>

                <Slider

                    {...settingSlider2}

                >


                    {dataSlider.map((item, index) => {


                        return (

                            <div key={item.title} className="slider-item">
                                <PopperWrapper >
                                    <div className="slider-title">

                                        <p>

                                            {item.title}

                                        </p>
                                    </div>
                                </PopperWrapper>
                            </div>

                        )

                    })}



                </Slider>

            </div>
        </div >
    );
}

export default SliderImage;