import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Header from '../../coponent/inc/Header/Header';
import AboutUs from '../../coponent/AboutUs/AboutUs';
import Contact from '../../coponent/Contact/Contact';
import Footer from '../../coponent/inc/Footer/Footer';
import SubSlider from '../../coponent/SubSlider/SubSlider';
import ProductApi from '../../Service/ProductApi';
CartLayout.propTypes = {

};

const suggestionProduct =


    [
        {
            "id": 31397093,
            "productId": null,


            "name": "ÁO SƠ MI NỮ",
            "shortDescription": "quý khách vui lòng đăng nhập tài khoản tài khoản sendo có chứng thực số điện thoại, va phải trùng số đt nhận hàng , mỗi tháng không quá 3 lần miễn phí va 1 ngày cho đơn hàng đầu tiên  đặt hàng thành công sẻ được miễn phí vận chuyển tối đa 30k  nhé, á...",
            "originalPrice": 199000,
            "salePrice": 165000,
            "isPromotion": true,

        },
        {
            "id": 13761499,
            "productId": null,
            "title": null,

            "name": "ÁO SƠ MI NỮ",
            "originalPrice": 179000,
            "salePrice": 149000,

        },
        {
            "id": 31265547,
            "productId": null,
            "title": null,
            "created_by": null,
            "updated_by": null,
            "created_at": "2020-10-18T06:08:27.769Z",
            "updated_at": "2020-10-18T06:08:27.769Z",
            "name": "Áo sơ mi nữ",
            "originalPrice": 209000,
            "salePrice": 209000,

        },
        {
            "id": 16716114,
            "productId": null,
            "title": null,
            "created_by": null,
            "updated_by": null,
            "created_at": "2020-10-18T06:08:27.769Z",
            "updated_at": "2020-10-18T06:08:27.769Z",
            "name": "Áo sơ mi nữ",
            "originalPrice": 160000,
            "salePrice": 97020,

        },
        {
            "id": 17139573,
            "productId": null,
            "title": null,

            "name": "ÁO SƠ MI NỮ",
            "originalPrice": 179000,
            "salePrice": 99000,
            "isPromotion": true,
            "promotionPercent": 45,
            "isFreeShip": false,
            "category": {
                "id": 1,
                "name": "Thời trang",
                "searchTerm": "ao so mi nu",
                "created_by": null,
                "updated_by": null,
                "created_at": "2020-10-18T06:06:55.456Z",
                "updated_at": "2020-10-18T06:06:55.456Z"
            },
            "thumbnail": {
                "id": 4,
                "name": "ao-so-mi-nu.jpg",
                "alternativeText": "",
                "caption": "",
                "width": 444,
                "height": 444,
                "formats": {
                    "thumbnail": {
                        "ext": ".jpg",
                        "url": "/uploads/thumbnail_9ff7d29c2ebad4fd802685eb770d9452_417240087a.jpg",
                        "hash": "thumbnail_9ff7d29c2ebad4fd802685eb770d9452_417240087a",
                        "mime": "image/jpeg",
                        "name": "thumbnail_9ff7d29c2ebad4fd802685eb770d9452.jpg",
                        "path": null,
                        "size": 5.83,
                        "width": 156,
                        "height": 156
                    }
                }
            }
        },
        {
            "id": 19190675,
            "productId": null,
            "title": null,
            "name": "ao so mi nu",
            "shortDescription": "Áo sơ mi nữ!Khởi động tuần mới cực hot cùng sơ mi viền cổ dài tay.Post yêu thích dành riêng cho các tín đồ của sơ mi.Đa dạng mẫu mã cho mọi phong cáchChất liệu vải Voan Lụa đẹp, thiết kế siêu chất, kiểu dáng siêu xinh.Bảo đảm chất mềm, mịn, mát, khôn...",
            "originalPrice": 285000,
            "salePrice": 159000,
            "isPromotion": true,
            "promotionPercent": 45,



        },
        {
            "id": 18874017,
            "productId": null,
            "title": null,

            "originalPrice": 49000,
            "salePrice": 49000,
            "isPromotion": false,
            "promotionPercent": 0,
            "isFreeShip": false


        },


    ];

function CartLayout({ children }) {


    const [randomProducts, setRandomProducts] = useState([]);






    useEffect(() => {
        (async () => {

            const response = await ProductApi.getAllProduct({
                random: true,
                limit: 7
            })



            setRandomProducts(response.data);


        })();


    }, [])
    return (
        <div className='cart-layout'>



            <Header />







            <div className="content">
                {children}
            </div>



            <div className="cart-layout__suggestion">

                <SubSlider otherProducts={randomProducts} />
            </div>


            <div className="cart-layout__about-us">
                <AboutUs />
            </div>

            <div className="cart-layout__contact">
                <Contact />
            </div>


            <Footer />
        </div>
    );
}

export default CartLayout;