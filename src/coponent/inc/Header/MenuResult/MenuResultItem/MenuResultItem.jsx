import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Image from '../../../../Image/Image';
import { baseUrl } from '../../../../../constanst/UrlContanst';
import FormatPrice from '../../../../../until/FormatPrice/FormatPrice';
MenuResultItem.propTypes = {

};

function MenuResultItem({ product, onClick }) {


    // console.log(product);
    return (
        <li className='menu-result-item' onClick={() => {

            onClick(product);
        }
        }>
            <div className="img">

                <Image className="img_inner" src={product?.image} alt="" />
            </div>
            <div className="info">
                <p className="info__desc">
                    {product?.name}
                </p>

                <div className="info__price">


                    {FormatPrice(product?.sale_price)}
                </div>
            </div>
        </li>
    );
}

export default MenuResultItem;