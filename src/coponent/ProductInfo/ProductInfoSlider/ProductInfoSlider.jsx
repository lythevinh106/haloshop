import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss";

import Slider from 'react-slick';
import Image from '../../Image/Image';
import PopperWrapper from '../../PopperWapper/PopperWrapper';
const sliderProductImage = [
    {
        id: 1,
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/08/image-removebg-preview-1.png"
    },
    {
        id: 2,
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/03/25/cam.png"
    },
    {
        id: 3,
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/08/image-removebg-preview-3.png"
    },
    {
        id: 4,
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/08/image-removebg-preview-1.png"
    },
    {
        id: 5,
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/03/25/cam.png"
    },
    {
        id: 6,
        image: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/04/08/image-removebg-preview-3.png"
    },

]


function ProductInfoSlider({ images }) {

    // console.log("day la slider")
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, [])

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
        ref: slider1,
        asNavFor: nav2,

    }


    const settingSlider2 = {
        asNavFor: nav1,
        ref: slider2,

        slidesToShow: 5,
        swipeToSlide: true,
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 4,

                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,

                }
            },



        ]

    }

    return (
        <PopperWrapper>
            <div className='info-slider-wrapper'>

                <div className='info-slider--main'>
                    <Slider
                        {...settingSlider1}

                    >
                        {images.map((image) => {


                            return (
                                <div key={image.id} >
                                    <Image src={image.name} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>

                <div className='info-slider--sub'>
                    <Slider
                        {...settingSlider2}
                    >
                        {images.map((image) => {


                            return (
                                <div key={image.id} className="slider__img">
                                    <img src={image.name} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </PopperWrapper>
    );
}

export default ProductInfoSlider;