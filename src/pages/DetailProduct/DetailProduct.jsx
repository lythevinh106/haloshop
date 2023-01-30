import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import "./style.scss";




import ProductInfo from '../../coponent/ProductInfo/ProductInfo';
import { useParams } from 'react-router-dom';

import ProductApi from '../../Service/ProductApi';

DetailProduct.propTypes = {

};














function DetailProduct(props) {
    const [product, setProduct] = useState({});
    const [productImages, setProductImages] = useState([]);

    const linkParam = useParams();

    const { productId } = linkParam;


    useEffect(() => {


        const getApi = (async () => {

            try {

                const response = await ProductApi.showProduct(productId);

                setProduct(response.data.product);
                setProductImages(response.data.product_images);

                // console.log(response.data.product);

                // // window.scrollTo({
                // //     top: 0,
                // //     behavior: "smooth"
                // // })


            } catch (error) {

                // }
            }


        })();



    }, [productId]);


    return (
        <div className='detail-product-wrapper'>


            <div className="detail-product__main" >
                <ProductInfo productImages={productImages} product={product} />
            </div>



        </div>
    );
}

export default DetailProduct;