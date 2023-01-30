import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import "./style.scss";

import Product from '../../coponent/Product/Product';



Home.propTypes = {

};






const bigBanner = [


    {
        id: 1,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/08/1200x200-hotsale-galaxy-a-series-01-1.jpg"
    },




]











function Home(props) {



    return (
        <div className='home-wrapper'>



            <div className="home__product">


                <Product headerTitle="TỔNG HỢP SẢN PHẨM " isPagination={false} />
                {/* <Product headerTitle="SẢN PHẨM BÁN CHẠY" products={productsData} /> */}
            </div>



        </div>
    );
}

export default Home;