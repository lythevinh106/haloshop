import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import Image from '../Image/Image';
import "./style.scss";
import TitleCart from '../TitleCart/TitleCart';
import FormatPrice from '../../until/FormatPrice/FormatPrice';
import PopperWrapper from '../PopperWapper/PopperWrapper';
import ProductItem from '../Product/ProductItem/ProductItem';
import { baseUrl } from '../../constanst/UrlContanst';





function SubSlider({ otherProducts }) {

    // console.log(otherProducts);

    const settingSlider = {


        slidesToShow: 5,
        swipeToSlide: true,
        focusOnSelect: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 442,
                settings: {
                    slidesToShow: 2,

                }
            },]


    }

    return (
        <div className='sub-slider-wrapper'>
            <div className="sub-slider--title">
                <TitleCart title='Gợi Ý Cho Bạn' btnOrange />
            </div>
            <Slider
                {...settingSlider}
            >

                {/* {console.log("render slide")} */}
                {


                    otherProducts.map((product) => {


                        return (
                            <div className="sub-slider-item-wrapper" key={product.id}>

                                {/* <PopperWrapper>
                                <div className="sub-slider-item" >
                                    <div className="slider__img">
                                        <Image src={image.image} />
                                    </div>

                                    <div className="slider__title">
                                        Laptop GIGABYTE U4 UD-50VN823SO i5-1155G7/16GB/512GB SSD/14"
                                        FHD/UMA/Win11/Light Gray - Chính Hãng
                                    </div>
                                    <div key={image.id} className="slider__price">
                                        <div className="price--new">{FormatPrice(3000000)}</div>
                                        <div className="price--old">{FormatPrice(3000000)}</div>
                                    </div>
                                </div>
                      

                            </PopperWrapper> */}




                                <ProductItem sliderStyle title={product.name} id={product.id}



                                    image={product.image}
                                    newPrice={product.sale_price} oldPrice={product.origin_price}
                                />
                            </div>

                        )
                    })}
            </Slider>

        </div>
    );
}

export default SubSlider;