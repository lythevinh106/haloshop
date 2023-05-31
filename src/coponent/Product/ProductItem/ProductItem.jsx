import React, { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from './../../Image/Image';
import Button from '../../Button/Button';
import { ShoppingCartOutlined } from '@mui/icons-material';
import PopperWrapper from "../../PopperWapper/PopperWrapper"
import "./style.scss"
import { toast } from 'react-toastify';
import { Link, redirect, useNavigate } from 'react-router-dom';
import ApiProduct from '../../../ApiService/ApiProduct';
import FormatPrice from '../../../until/FormatPrice/FormatPrice';

import cln from "classnames"

import { activeProgress, activeToast } from '../../../features/progress/progressSlice';
import { useSelector, useDispatch } from 'react-redux'
import { addCartAuth, addToCart } from '../../../features/Cart/CartSlice';
import MyRating from '../../Rating/Rating';


function ProductItem({ image, title = 0, oldPrice = 0, newPrice = 0, id = 0, sliderStyle = false,
    cartStyle = false, avgRating }) {

    const cartValue = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    const localUser = localStorage.getItem("user") || null;









    const handleBtnCartOnClick = useCallback((data) => {


        //////mo phong viec goi Api
        dispatch(activeProgress(true))
        setTimeout(() => {
            dispatch(activeProgress(false))

            handleAddToCar(data);

            dispatch(activeToast({
                status: "success",
                message: "thêm giỏ hàng thành công!",
                setting: {
                    autoClose: 1500,
                },

                style: {
                    fontSize: "5px",
                    fontWeight: "bold",
                    color: "#00483d"

                }


            }));


        }, 1000)


    }, [])


    const handleAddToCar = (data) => {


        if (localUser) {
            dispatch(addCartAuth(data))


        }
        else {
            dispatch(addToCart(data))
        }
        // console.log(data)
    }

    const handleNavigate = () => {
        return redirect(`/products/${id}`)

    }



    // const notifyCart = () => toast.success('thêm giỏ hàng thành công!', {
    //     position: "top-right",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     style: {
    //         fontSize: "5px",
    //         fontWeight: "bold",
    //         color: "#00483d"

    //     }
    // });




    const classnames = cln("product-item-wrapper", {

        "slider-style": sliderStyle,
        "cart-style": cartStyle

    })

    // console.log("day la comp  product _item");
    return (

        <div className={classnames}>

            <PopperWrapper>
                <div className='product-item'>
                    <div className="product-item__img" onClick={handleNavigate}>
                        <Link to={`/products/${id}`}>  <Image src={image} /></Link>
                    </div>

                    <Link className="product-item__title" to={`/products/${id}`}>
                        {title}


                    </Link>


                    <div className="product-item__rating">

                        <MyRating readOnly

                            value={avgRating}



                        ></MyRating>
                    </div>

                    <div className="product-item__price" >
                        <div className="price--new">

                            {FormatPrice(newPrice)}

                        </div>

                        <div className="price--old">
                            {FormatPrice(oldPrice)}
                        </div>
                    </div>
                    <div className="product-item__btn">


                        <div className="product-btn-wrapper">
                            <Button to={`/products/${id}`} btnRed sizeSmall
                            //  onClick={handleNavigate}
                            >


                                Mua Ngay
                            </Button>
                        </div>



                        <div className="product-btn-wrapper">
                            <Button btnRed SizeNormal onClick={() => {
                                handleBtnCartOnClick({
                                    id,
                                    product: {
                                        oldPrice,
                                        newPrice, image, title
                                    },
                                    quantity: 1,

                                })
                            }}>
                                Giỏ Hàng
                            </Button>

                        </div>


                    </div>


                </div>

            </PopperWrapper >
        </div >
    );
}

export default memo(ProductItem);