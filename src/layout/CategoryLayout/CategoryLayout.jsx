import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../coponent/inc/Header/Header';
import AboutUs from '../../coponent/AboutUs/AboutUs';
import Contact from '../../coponent/Contact/Contact';
import Footer from '../../coponent/inc/Footer/Footer';
import SubBanner from '../../coponent/SubBanner/SubBanner';
import Snowfall from 'react-snowfall'

import snow from "./../../storage/images/snow.png"
import "./styles.scss";



const snowLake = document.createElement("img");
snowLake.src = snow;

const images = [snowLake];






CategoryLayout.propTypes = {

};

const bigBanner = [


    {
        id: 1,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/12/smart-tivi-casper-01-2.jpg"
    },




]

function CategoryLayout({ children }) {

    return (


        <div className='category-layout-wrapper'>
            <Header />

            <div className="category-layout__sub-banner" >
                <SubBanner listBanner={bigBanner} col1 />
            </div>

            {children}


            <div className="category-layout__about-us">
                <AboutUs />
            </div>

            <div className="category-layout__contact">
                <Contact />
            </div>


            <Footer />
        </div>

    );
}
export default CategoryLayout;