import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import ProductItem from "../../coponent/Product/ProductItem/ProductItem"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import Button from "../../coponent/Button/Button"
import ControlOrder from "../../coponent/ControlOrder/ControlOrder"
import CloseIcon from '@mui/icons-material/Close';
import cln from "classnames"
import { number } from 'yup/lib/locale';
import PopperWrapper from '../../coponent/PopperWapper/PopperWrapper';
import FormatPrice from '../../until/FormatPrice/FormatPrice';
import FormPayment from '../../coponent/FormPayment/FormPayment';
import { useDispatch, useSelector } from 'react-redux';
import { paymentAuth, RemoveAll, removeAuthItem, removeItem, setQuantity, setQuantityAuth } from '../../features/Cart/CartSlice';
import { totalPrice, totalQuantity } from '../../features/Cart/selector'
import { toast } from 'react-toastify';
import { activeProgress, activeToast } from '../../features/progress/progressSlice';

import emptyImage from "./../../storage/images/istockphoto-861576608-612x612.jpg"
import Image from '../../coponent/Image/Image';
import CartApi from '../../Service/CartApi';
Cart.propTypes = {

};



function Cart(props) {
    const navigate = useNavigate();
    const localUser = localStorage.getItem("user") || null;
    const [disabledSubmit, setDisabledSubmit] = useState(false)

    const cartItems = useSelector((state) => state.cart.cartItems);
    // console.log(cartItems)



    const setInitValue = () => {




        return cartItems.map((product) => {

            return {
                id: product.id,
                number: product.quantity,
                salePrice: product.product.newPrice,
                originalPrice: product.product.oldPrice,
                thumbnail: product.product.image,
                name: product.product.title,
            }
        })

    }



    const [valueOrders, setValueOrders] = useState(setInitValue)
    // const [valueInput, setValueInput] = useState([])




    const dispatch = useDispatch();


    useEffect(() => {


        const ValueChange = cartItems.map((product) => {

            return {
                id: product.id,
                number: product.quantity,
                salePrice: product.product.newPrice,
                originalPrice: product.product.oldPrice,
                thumbnail: product.product.image,
                name: product.product.title,
            }
        })

        setValueOrders(ValueChange);

    }, [cartItems])

    // console.log(valueOrders);
    const handleCartBackClick = () => {
        navigate(-1);

    }


    const handleBtnCloseOnClick = (id) => {



        const newValue = valueOrders.filter((value) => {
            return value.id !== id
        })

        setValueOrders((prev) => {
            return [

                ...newValue
            ]
        })




        if (localUser) {
            dispatch(removeAuthItem(id));
            // return;
        } else {
            // console.log("chua dang nhap");
            dispatch(removeItem(id));
        }




    }


    const handleBtnLessOnClick = useCallback((productId) => {
        dispatch(activeProgress(true))
        const oldItemValue = valueOrders.find((value) => value.id == productId);
        // console.log(oldItemValue);
        if (oldItemValue.number <= 1) {
            dispatch(activeProgress(false))
            return;
        }


        const newValue = [...valueOrders];


        newValue.forEach((value, index) => {

            if (value.id == productId) {
                value.number -= 1;
            }
        })

        setValueOrders(
            [...newValue]
        )

        const newItem = newValue.find((value) => value.id == productId)

        if (localUser) {
            dispatch(setQuantityAuth(newItem));
        } else {
            // console.log("chua dang nhap");
            dispatch(setQuantity(newItem));
        }
        // dispatch(setQuantity(newItem));


        setTimeout(() => {
            dispatch(activeProgress(false))

        }, 1000)


    }, [valueOrders])



    const handleBtnPlusOnClick = useCallback((productId) => {
        //    console.log("len")
        dispatch(activeProgress(true))
        const oldItemValue = valueOrders.find((value) => value.id == productId);
        // console.log("old-item", oldItemValue);
        if (oldItemValue.number >= 10) {
            dispatch(activeProgress(false))
            return;
        }


        const newValue = [...valueOrders];


        newValue.forEach((value, index) => {

            if (value.id == productId) {
                value.number += 1;
            }
        })

        // console.log(newValue, productId);
        setValueOrders(
            [...newValue]
        )

        const newItem = newValue.find((value) => value.id == productId)
        console.log(newItem);

        if (localUser) {
            dispatch(setQuantityAuth(newItem));
        } else {
            // console.log("chua dang nhap");
            dispatch(setQuantity(newItem));
        }



        setTimeout(() => {
            dispatch(activeProgress(false))

        }, 1000)




    }, [valueOrders]);


    const TotalPrice = useMemo(() => {

        let total = 0;

        valueOrders.forEach((value) => {

            total += value.number * value.salePrice;

        })
        return total;
    }, [valueOrders])


    // const notifyCart = () => toast.success('Đặt Hàng Thành Công Hãy Kiểm Tra Email Của Bạn!', {
    //     position: "top-right",
    //     autoClose: 4000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     style: {
    //         fontSize: 10,
    //         fontWeight: "bold",
    //         color: "#00483d",


    //     }


    // });



    // const notifyCart2 = () => toast.error('Đặt Hàng Không Thành Công Do lỗi', {
    //     position: "top-right",
    //     autoClose: 4000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     style: {
    //         fontSize: 10,
    //         fontWeight: "bold",
    //         color: "#00483d",


    //     }


    // });

    const handleOnAuthPayment = async () => {





    }

    const handleOnSubmit = useCallback(async (data) => {
        dispatch(activeProgress(true))
        // console.log(cartItems);
        const newCartInfo = [...cartItems];
        const info = newCartInfo.map((cart) => {
            return {
                id: cart.id,
                quantity: cart.quantity
            }

        })
        const newData = {
            ...data,
            cart_info: info

        }


        if (localUser) {


            const response = await dispatch(paymentAuth(JSON.parse(localUser)));
            if (response?.payload?.original?.status == 200) {
                dispatch(activeProgress(false))
                dispatch(RemoveAll());


                dispatch(activeToast({
                    status: "success",
                    message: "Đặt Hàng Thành Công Hãy Kiểm Tra Email Của Bạn!!",
                    setting: {
                        autoClose: 4000,
                    },

                    style: {
                        fontSize: "5px",
                        fontWeight: "bold",
                        color: "#00483d"

                    }


                }));
            }
            else {
                dispatch(activeProgress(false))
            }

        }
        else {




            const response = await CartApi.addCart(newData);
            if (response?.original.status == 200) {
                dispatch(RemoveAll());
                dispatch(activeToast({
                    status: "success",
                    message: "Đặt Hàng Thành Công Hãy Kiểm Tra Email Của Bạn!!",
                    setting: {
                        autoClose: 4000,
                    },

                    style: {
                        fontSize: "5px",
                        fontWeight: "bold",
                        color: "#00483d"

                    }


                }));
            } else {
                dispatch(activeToast({
                    status: "error",
                    message: "Đặt Hàng Không Thành Công Do Lỗi!!",
                    setting: {
                        autoClose: 3000,
                    },

                    style: {
                        fontSize: "5px",
                        fontWeight: "bold",
                        color: "#00483d"

                    }


                }));
            }


        }



        dispatch(activeProgress(false))




    }, [valueOrders])
    const cartTotalQuantity = useSelector(totalQuantity);
    const cartTotalPrice = useSelector(totalPrice);


    return (
        <>
            {cartTotalQuantity <= 0
                ? <div className='cart-empty'>
                    <div className="cart-empty__title">
                        Giỏ Hàng Trống
                    </div>
                    <div className="cart-empty__image">
                        <Image src={emptyImage} />
                    </div>





                </div>



                :

                <div className='cart-wrapper'>

                    {/* {cartTotalPrice}; */}
                    <div className="cart__back" onClick={handleCartBackClick}>
                        <span className='cart__back__icon'>

                            <ArrowBackIosIcon />

                        </span>

                        <div className="cart__back__title">
                            Quay Lại
                        </div>
                    </div>

                    <div className="cart__main">

                        <div className="cart__main--info" >


                            <div className="cart-icon">
                                <CheckCircleIcon />
                            </div>



                            {valueOrders.map((product) => {
                                // { console.log("number+id", product.number, product.id) }

                                return (
                                    <div className={cln(
                                        "cart-item", {
                                        // "hidden": !openProduct
                                    }
                                    )}
                                        key={product.id}
                                    >

                                        <div className="cart__btn-close">
                                            <Button rounded btnRed
                                                onClick={() => { handleBtnCloseOnClick(product.id) }}
                                            >
                                                <CloseIcon />
                                            </Button>


                                        </div>








                                        <div className="cart-item-product-wrapper">
                                            <div className="cart-item__product">






                                                <ProductItem cartStyle
                                                    oldPrice={product.originalPrice * product.number}


                                                    newPrice={
                                                        product.salePrice * product.number

                                                    }

                                                    image={product.thumbnail}
                                                    title={product.name}
                                                    id={product.id}
                                                />
                                            </div>
                                            <div className="cart-item__control">
                                                <ControlOrder
                                                    btnLessOnClick={() => handleBtnLessOnClick(product.id)}
                                                    btnPlusOnClick={() => handleBtnPlusOnClick(product.id)}

                                                >

                                                    <input
                                                        readOnly

                                                        value={product.number}



                                                    />
                                                </ControlOrder>
                                            </div>
                                        </div>



                                    </div>
                                )
                            })}
                            {console.log("-----")}




                            <div className="cart-total">
                                <div className="cart-total--item">

                                    Tổng giá Trị:  <span className='cart-total--item__price'>  {

                                        FormatPrice(cartTotalPrice)

                                    }</span>
                                </div>
                                <div className="cart-total--item">
                                    Giảm Giá:0
                                </div>

                                <div className="cart-total--item">
                                    Tổng Thanh Toán <span className='cart-total--item__price'>{FormatPrice(cartTotalPrice)}</span>
                                </div>
                            </div>



                        </div>

                    </div>

                    {
                        localUser ? <>

                            <div className='cart__main--auth__info'>
                                <div className='auth_title'>* Bạn Có Thể Xem Và Sửa Thông Tin Của Bạn
                                    <span>Ở Phần Họ Và Tên Đầu Trang</span></div>
                                <div className='auth_btn'>
                                    <Button type='submit' onClick={handleOnSubmit}>  Tiến Hành Đặt Hàng</Button>
                                </div>
                            </div>








                        </> : <div className="cart__main--form" >
                            <div className="cart__main--form__title">

                                Thông Tin Đặt Hàng
                            </div>
                            <div className="cart__main--form__info"> <FormPayment onSubmit={handleOnSubmit} /></div>

                        </div>
                    }




                </div>
            }
        </>
    );
}

export default Cart;