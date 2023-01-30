import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Header from '../../coponent/inc/Header/Header';
import Footer from '../../coponent/inc/Footer/Footer';
import "./style.scss";
import SliderImage from '../../coponent/SliderImage/SliderImage';
import SubBanner from '../../coponent/SubBanner/SubBanner';
import AboutUs from '../../coponent/AboutUs/AboutUs';
import Contact from '../../coponent/Contact/Contact';
const dataSlider = [{
    id: 1,
    image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/08/galaxy-z-fold4-z-flip4-noel-1200x3821111111111111111.jpg",
    title: "slide1"

},
{
    id: 2,
    image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/07/ipad-apple-web.jpg"
    , title: "slide2"


},

{
    id: 3,
    image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/11/30/amazfit-gts-2-mini-1200x382-1.jpg"
    , title: "slide3"


},
{
    id: 4,
    image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/11/30/xiaomi-tong-t12-1200x382.jpg"
    , title: "slide4"


},



]


const ListSubBanner = [


    {
        id: 1,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/08/11/chuyen-trang-samssung-11.png"
    },

    {
        id: 2,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/07/sanphamhot11.jpg"
    }

    ,
    {
        id: 3,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/11/01/sanphamhot-12-lite-1.jpg"
    },


    {
        id: 4,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/10/04/huawei-d14-banner-nho-01.jpg"
    },


]



const bigBanner = [


    {
        id: 1,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/08/1200x200-hotsale-galaxy-a-series-01-1.jpg"
    },




]



function Defaultayout({ children }) {






    return (
        <div className='default-layout'>



            <Header />

            <div className="default-layout__slider">
                <SliderImage dataSlider={dataSlider} />
            </div>

            <div className="default-layout__sub-banner">
                <SubBanner listBanner={ListSubBanner} />
            </div>



            <div className="content">
                {children}
            </div>



            <div className="default-layout__sub-banner" >
                <SubBanner listBanner={bigBanner} col1 />
            </div>



            <div className="default-layout__about-us">
                <AboutUs />
            </div>

            <div className="default-layout__contact">
                <Contact />
            </div>


            <Footer />
        </div>
    );
}

export default Defaultayout;