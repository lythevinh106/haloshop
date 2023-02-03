import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import ProductInfoSlider from './ProductInfoSlider/ProductInfoSlider';
import ProductInfoCenter from './ProductInfoCenter/ProductInfoCenter';
import PopperWrapper from '../PopperWapper/PopperWrapper';
import cln from "classnames"
import ApiProduct from '../../ApiService/ApiProduct';
import SkeletonInfoCart from '../SkeletonComp/SkeletonInfoCart';
import SkeletonImageProduct from '../SkeletonComp/SkeletonImageProduct';
ProductInfo.propTypes = {

};

function ProductInfo({ product, productImages }) {












    const [showReadMore, setShowReadMore] = useState(false);




    const handleDesOnClick = () => {

        setShowReadMore(!showReadMore);
    }
    // console.log("day la lay out cua product info");

    return (
        <div className='product-info-wrapper'>

            <div className="product__title">
                {product.name}
            </div>
            <div className="product__main">




                {
                    !product.image ? <SkeletonImageProduct /> : <div className="product__main__slider">

                        <ProductInfoSlider images={productImages} />




                    </div>
                }








                <div className="product__main__center">
                    {
                        !product.name ? <SkeletonInfoCart /> : <ProductInfoCenter


                            product={product}



                        />
                    }



                </div>
            </div>



            <div className="product__des-wrapper">
                <PopperWrapper>
                    <div className="product__des">




                        <div className={cln("product__des__content", { active: showReadMore })}
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        >


                        </div>

                        <div className={cln("product__des__btn", {
                            active: showReadMore
                        })}

                            onClick={handleDesOnClick}>
                            <span>  {showReadMore ?

                                "Thu Gọn" : "Xem Thêm"}</span>


                        </div>
                    </div>
                </PopperWrapper>
            </div >
        </div >
    );
}

export default ProductInfo;