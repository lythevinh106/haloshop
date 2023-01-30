import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../coponent/inc/Header/Header';
import Footer from '../../coponent/inc/Footer/Footer';
import "./style.scss"
import SubBanner from '../../coponent/SubBanner/SubBanner';
import AboutUs from '../../coponent/AboutUs/AboutUs';
import Contact from '../../coponent/Contact/Contact';
import SubSlider from '../../coponent/SubSlider/SubSlider';
import ProductApi from '../../Service/ProductApi';
import { useParams } from 'react-router-dom';

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






const bigBanner = [


    {
        id: 1,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/08/1200x200-hotsale-galaxy-a-series-01-1.jpg"
    },




]




DetailProductLayout.propTypes = {

};

function DetailProductLayout({ children }) {


    const [productOfCategory, setProductOfCategory] = useState([]);


    let { productId } = useParams();
    console.log(productId);



    useEffect(() => {
        (async () => {

            const response = await ProductApi.showProductsOfCategory(productId, {
                limit: 6
            })


            if (response.code == 200) {
                setProductOfCategory(response.data);
            }

        })();


    }, [])



    return (
        <div className='detail-product-layout'>



            <Header />
            {children}


            <div className="detail-product-layout__sub-banner" >
                <SubBanner listBanner={bigBanner} col1 />
            </div>

            <div className="detail-product-layout__suggestion">
                <SubSlider otherProducts={productOfCategory} />
            </div>

            <div className="detail-product-layout__about-us">
                <AboutUs />
            </div>

            <div className="detail-product-layout__contact">
                <Contact />
            </div>



            <Footer />
        </div>
    );
}

export default DetailProductLayout;