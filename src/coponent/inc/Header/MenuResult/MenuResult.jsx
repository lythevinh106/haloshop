import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import "./styles.scss";
import MenuResultItem from './MenuResultItem/MenuResultItem';
import { useNavigate } from 'react-router-dom';
MenuResult.propTypes = {

};

function MenuResult({ products, input, onClick = () => { } }) {

    // console.log("products", products)

    const handleOnclick = (products) => {



        onClick(products)
    }

    return (


        <ul className='menu-result'>

            {/* < MenuResultItem product={products} onClick={handleOnclick} /> */}

            {
                products.length > 0 ? products.map((product) => {

                    return (
                        <MenuResultItem key={product.id} onClick={handleOnclick} product={product} />
                    )




                }) : <h3>Không tìm thấy kết quả</h3>
            }





        </ul>

    );
}

export default MenuResult;