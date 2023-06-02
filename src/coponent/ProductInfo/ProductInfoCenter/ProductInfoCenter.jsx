import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '../../Button/Button';
import PopperWrapper from '../../PopperWapper/PopperWrapper';
import FormatPrice from '../../../until/FormatPrice/FormatPrice';


import ModalBuyNow from '../../ModalBuyNow/ModalBuyNow';
import { useDispatch } from 'react-redux';

import { addCartAuth, addToCart } from "./../../../features/Cart/CartSlice.js"
import { activeProgress, activeToast } from "./../../../features/progress/progressSlice.js"



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MyRating from '../../Rating/Rating';
import { Box, Typography } from '@mui/material';
import CartApi from '../../../Service/CartApi';
import ProductApi from '../../../Service/ProductApi';
import AuthApi from '../../../Service/Auth';



ProductInfoCenter.propTypes = {

};

function ProductInfoCenter({ product }) {


    // console.log(productInfoCenter);

    const [open, setOpen] = useState(false);


    const [valueRating, setValueRating] = useState(0);


    const localUser = localStorage.getItem("user") || null;


    const dispatch = useDispatch();







    const handleOnClickBtnBuy = () => {
        setOpen(true)
    }

    const handleModalClick = useCallback(() => {
        setOpen(false)
    }, [])

    const handleBtnAddCartOnClick = (e, product) => {

        // console.log(id);

        dispatch(activeProgress(true));



        if (localUser) {
            dispatch(addCartAuth(product))


        }
        else {
            dispatch(addToCart(product))
        }



        dispatch(activeProgress(false));




        handlePopupClick(e);


    }



    ///*----------

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open2 = Boolean(anchorEl);
    const handlePopupClick = (event) => {
        setAnchorEl(document.body);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log(valueRating);
    useEffect(() => {

        if (!localUser) {
            return;
        }
        else {
            try {

                (async () => {

                    const response = await AuthApi.checkRatingProduct(product.id, {
                        "userID": JSON.parse(localUser)?.id,

                    });

                    // console.log(response.original.result);

                    setValueRating(response.original.result);




                })();


            } catch (error) {

            }
        }



    }, [product.id])


    const handleOnChangeRating = async (event, newValue) => {






        if (localUser) {



            try {


                const response = await AuthApi.ratingProduct(product.id, {
                    "userID": JSON.parse(localUser)?.id,
                    "rating": newValue
                });




                setValueRating(newValue);
                dispatch(activeToast({
                    status: "success",
                    message: "Bạn Đã Đánh Giá Sản Phẩm Thành Công",
                    setting: {
                        autoClose: 1500,
                    },

                    style: {
                        fontSize: "5px",
                        fontWeight: "bold",
                        color: "#00483d"

                    }


                }));

            } catch (error) {
                dispatch(activeToast({
                    status: "error",
                    message: "Có Lỗi",
                    setting: {
                        autoClose: 1500,
                    },

                    style: {
                        fontSize: "5px",
                        fontWeight: "bold",
                        color: "#00483d"

                    }


                }));
            }


        }
        else {
            dispatch(activeToast({
                status: "error",
                message: "Vui Lòng Đăng Nhập Để Sử Dụng Chức Năng Này",
                setting: {
                    autoClose: 1500,
                },

                style: {
                    fontSize: "5px",
                    fontWeight: "bold",
                    color: "#00483d"

                }


            }));

            return;
        }



    }




    // console.log("day la lay out cua product info center");
    return (
        <PopperWrapper>



            <div className='info-center-wrapper'>
                <div className="info--price">
                    <span className="info--price__new">
                        {FormatPrice(product.sale_price)}
                    </span>
                    <span className="info--price__old">

                        {FormatPrice(product.origin_price)}
                    </span>
                </div>


                <PopperWrapper>
                    <div className="info--banner">


                        <div className="info--banner--icon">
                            < AirplanemodeActiveIcon />
                        </div>
                        <div className="info--banner-title">
                            Miễn Phí Vận Chuyển Toàn Quốc
                        </div>

                    </div>
                </PopperWrapper>



                <div className="info--desc">
                    <div className="info--desc--title">
                        Mô Tả
                    </div>

                    <div className="info--desc--main">


                        {product.description}

                    </div>


                </div>


                <ModalBuyNow productInfoCenter={product} open={open} onClick={handleModalClick} />

                <div className="info--rating">

                    <MyRating title='Chọn Đánh Giá Của Bạn'

                        value={valueRating || 0}
                        onChange={handleOnChangeRating}



                    ></MyRating>






                </div>





                <div className="info--btn">

                    <div className="info--btn__buy">
                        <Button btnRed sizeBig onClick={handleOnClickBtnBuy}>



                            <div className='btn--title'>Mua Ngay</div>
                            <div className='btn--title'>Giao Tận Nhà (COD)

                            </div>
                            <div className='btn--title'>  hoặc   nhận tại cửa hàng</div>


                        </Button>
                    </div>
                    <div className="info--btn_cart"

                    >

                        <Button sizeBig
                            id="basic-button"
                            aria-controls={open2 ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open2 ? 'true' : undefined}

                            onClick={(e) => {
                                handleBtnAddCartOnClick(e, {


                                    id: product.id,
                                    product: {
                                        oldPrice: product.origin_price
                                        ,
                                        newPrice: product.sale_price

                                        , image: product.image,
                                        title: product.name
                                    },
                                    quantity: 1,




                                })
                            }}


                        >
                            <div className="btn-cart__icon">
                                <AddShoppingCartIcon />
                            </div>
                            <div className="btn-cart__title">


                                <div className="btn--title" >
                                    Thêm Giỏ Hàng
                                </div>
                            </div>
                        </Button>







                    </div>


                </div>

            </div>

            <div>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open2}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}

                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}

                >
                    <PopperWrapper>
                        <div className="btn-cart-modal">

                            <div className="btn-cart-modal__title">
                                Thêm Giỏ Hàng Thành Công
                            </div>
                            <div className="btn-cart-modal__detail">
                                <Button to="/cart">
                                    Xem Chi Tiết
                                </Button>
                            </div>
                        </div>
                    </PopperWrapper>
                </Menu>
            </div>

        </PopperWrapper >
    );
}

export default ProductInfoCenter;