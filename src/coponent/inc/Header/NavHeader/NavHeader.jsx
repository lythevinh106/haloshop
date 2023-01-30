import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import NavHeaderItem from '../NavHeaderItem/NavHeaderItem';
import PopperWrapper from '../../../PopperWapper/PopperWrapper';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../../Image/Image';
import Button from '../../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveAll, removeAllAuthItem, resetCart, ToggleCart } from '../../../../features/Cart/CartSlice';
import FormatPrice from '../../../../until/FormatPrice/FormatPrice';

import emptyCart from "./../../../../storage/images/istockphoto-861576608-612x612.jpg"
import { totalPrice, totalQuantity } from '../../../../features/Cart/selector';

import ModalWrapper from '../../../Modal/ModalWrapper';
import FormRegister from '../../../Form/FormRegister/FormRegister';
import FormLogin from '../../../Form/FormLogin/FormLogin';
import AuthApi from '../../../../Service/Auth';
import { toast } from 'react-toastify';
import { login, logOut, updateInfo } from '../../../../features/Auth/AuthSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { activeProgress, activeToast } from '../../../../features/progress/progressSlice';
import { Typography } from '@mui/material';
import FormInfo from '../../../Form/FormInfo/FormInfo';
import { memo } from 'react';
import ListIcon from '@mui/icons-material/List';
import DrawerMain from '../../../DrawerMain/DrawerMain';
import ListCategoryMobile from '../ListCategoryMobile/ListCategoryMobile';
import { getLastName } from '../../../../until/getLastName';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Box } from '@mui/system';
import DialogInfo from '../../../DialogInfo/DialogInfo';
NavHeader.propTypes = {

};

function NavHeader(props) {






    // const modalRef = useRef();
    const localCart = localStorage.getItem("cart");
    const isMiniCart = useSelector((state) => state.cart.showMiniCart);
    const cartItems = useSelector((state) => state.cart.cartItems);


    const [showCart, setShowCart] = useState(isMiniCart);
    const [listItem, setListItem] = useState(cartItems);
    const cartTotalQuantity = useSelector(totalQuantity);
    const cartTotalPrice = useSelector(totalPrice);

    const [isOpenModal, setIsOpenModal] = useState(false);


    const [isOpenModalInfoMobile, setIsOpenModalInfoMobile] = useState(false);

    const [isOpenModalInfo, setIsOpenModalInfo] = useState(false);

    const [isFormLogin, setFormLogin] = useState(true);
    const [isDrawerMenu, setIsDrawerMenu] = useState(false);

    const localUser = JSON.parse(localStorage.getItem("user"));
    // console.log(cartItems);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const infoUser = useSelector((state) => state.auth);
    const handleOnMouseEnter = () => {

        dispatch(ToggleCart(true))
        setShowCart(true)

    }
    const handleOnBlur = () => {
        dispatch(ToggleCart(false))
        setShowCart(false)

    }

    const handleRemoveOnClick = () => {

        if (localUser) {
            dispatch(removeAllAuthItem(localUser?.id));
        }
        else {

            dispatch(RemoveAll());
        }

    }




    const [isLogin, setIsLogin] = useState(localUser ? true : false);
    const [info, setInfo] = useState(localUser || []);


    const refLogout = useRef(null);
    const refInfo = useRef(null);



    useEffect(() => {
        setListItem(cartItems);
        // console.log(cartItems)
    }, [cartItems, localCart])

    useEffect(() => {
        setIsLogin(localUser ? true : false)
        setInfo(localUser);

    }, [infoUser])


    const handleOpenModal = () => {
        setIsOpenModal(true);

    }

    const handleOpenModalInfo = () => {
        setIsOpenModalInfo(true);
    }

    const onCloseModal = () => {
        setIsOpenModal(false);

    }
    const onCloseModalInfo = () => {
        setIsOpenModalInfo(false);

    }


    const handleChangeFormRegister = () => {

        setFormLogin(false);
    }


    const handleChangeFormLogin = () => {

        setFormLogin(true);
    }


    const handleOnCloseModalInfoMobile = () => {
        setIsOpenModalInfoMobile(false);
        console.log("xóa")
    }















    const handleOpenDrawerMenu = () => {
        setIsDrawerMenu(true);


    }



    const handleUpdateInfoSubmit = async (data) => {




        if (localUser) {
            try {
                dispatch(activeProgress(true));

                const response = await dispatch(updateInfo(data));
                if (response?.payload?.original?.status == 201) {
                    console.log("ádasd");
                    dispatch(activeProgress(false));
                    dispatch(activeToast({
                        status: "success",
                        message: "Cập nhật tài khoản thành công!!!",
                        setting: {
                            autoClose: 2000,
                        },

                        style: {
                            fontSize: 10,
                            fontWeight: "bold",
                            color: "#00483d"

                        }


                    }));



                }

            } catch (error) {
                dispatch(activeProgress(false));

            }



        }





    }

    const handleRegisterSubmit = async (data) => {


        const response = await AuthApi.register(data);

        if (response.original.status == 203) {



            dispatch(activeToast({
                status: "error",
                message: " email của bạn đã có trong hệ thống vui lòng chọn email khác!!!",
                setting: {
                    autoClose: 3000,
                },

                style: {
                    fontSize: 10,
                    fontWeight: "bold",
                    color: "#00483d"

                }


            }));

            return;
        }
        if (response.original.status == 200) {

            dispatch(activeToast({
                status: "success",
                message: "đăng kí thành công kiểm tra email của bạn để xác thực!!",
                setting: {
                    autoClose: 1000,
                },

                style: {
                    fontSize: 10,
                    fontWeight: "bold",
                    color: "#00483d"

                }


            }));





            onCloseModal();

        }

        // if (response == 205) {

        // }

    }
    const handleLoginSubmit = async (data) => {

        dispatch(activeProgress(true));
        try {
            const user = await dispatch(login(data))
            // console.log(infoUser.jwt);
            // console.log(user.payload.cart.cartItems);

            if (user?.payload?.authorisation?.token

            ) {

                setIsOpenModal(false);
                // setListItem(user.payload.cart.cartItems);

                navigate(0);

            }
            else {
                dispatch(activeToast({
                    status: "error",
                    message: "Thông tin đăng nhập không chính xác!!",
                    setting: {
                        autoClose: 3000,
                    },

                    style: {
                        fontSize: 10,
                        fontWeight: "bold",
                        color: "#00483d"

                    }


                }));


            }

        } catch (error) {


            console.log(error)
            dispatch(activeProgress(false));

        }

        dispatch(activeProgress(false));
    }


    // console.log(refLogout);



    // console.log("day la nav header");


    return (
        <ul className="header-nav">

            <ModalWrapper open={isOpenModal} onClose={onCloseModal}
                component={



                    isFormLogin ? <FormLogin onChangeForm={handleChangeFormRegister} onSubmit={handleLoginSubmit} />


                        : <FormRegister onChangeForm={handleChangeFormLogin} onSubmit={handleRegisterSubmit} />





                }

            />




            {/* modalInfoUser */}

            <ModalWrapper open={isOpenModalInfo} onClose={onCloseModalInfo}
                component={



                    <FormInfo onSubmit={handleUpdateInfoSubmit} />





                }

            />













            {isLogin &&

                <>
                    <div className='title--mobile'


                        onClick={() => {
                            setIsOpenModalInfoMobile(true);

                        }}>

                        <VpnKeyIcon sx={{
                            color: "rgb(255,104,1)",

                            fontSize: "2.3rem",

                        }} />




                    </div>


                    <DialogInfo onClose={handleOnCloseModalInfoMobile}
                        name={info.name}
                        isOpen={isOpenModalInfoMobile} onLogoutClick={() => {
                            // console.log("out")

                            refLogout.current.click();
                            setIsOpenModalInfoMobile(false);
                        }}

                        onInfoClick={() => {
                            refInfo.current.click()
                            setIsOpenModalInfoMobile(false);
                        }

                        }
                    />
                </>
            }




            {isLogin ?

                <>
                    <div className="welcome-title">

                        <Link className='title--pc'>

                            <span onClick={handleOpenModalInfo} ref={refInfo}> {info.name}</span>

                            <span className='log_out' ref={refLogout} onClick={
                                () => {
                                    dispatch(logOut())
                                    dispatch(resetCart());
                                    dispatch(activeToast({
                                        status: "success",
                                        message: "Đã thoát tài khoản!!",
                                        setting: {
                                            autoClose: 1500,
                                        },

                                        style: {
                                            fontSize: 10,
                                            fontWeight: "bold",
                                            color: "#00483d"

                                        }


                                    }));



                                }



                            }> Thoát</span>
                        </Link>



                        {/* <Box className="title--mobile">

                            <VpnKeyIcon />
                        </Box> */}

                        {/* <Link className="title--mobile" onClick={handleOpenModal}>
                            <span >
                                <NavHeaderItem icon={<UserOutlined />} title="Đăng Nhập" />
                            </span>


                        </Link> */}












                    </div>





                </>
                :
                <div className="header-nav__item" onClick={handleOpenModal}>
                    <span > <PopperWrapper>
                        <NavHeaderItem icon={<UserOutlined />} title="Đăng Nhập" /></PopperWrapper>
                    </span>


                </div>



            }

            <div className="header-nav__item item--menu" onClick={handleOpenDrawerMenu}>

                <span>
                    <PopperWrapper>
                        <NavHeaderItem icon={<ListIcon />} title="Menu" />
                    </PopperWrapper>
                </span>

            </div>


            <DrawerMain component={<ListCategoryMobile onCatMobileClick={() => { setIsDrawerMenu(false) }} />} isDrawer={isDrawerMenu}
                setIsClose={() => { setIsDrawerMenu(false) }} />








            <div className="header-nav__item item--cart" onMouseLeave={handleOnBlur} onMouseEnter={handleOnMouseEnter}>
                <div className="item--cart-number">
                    <span>  {cartTotalQuantity}</span>
                </div>
                <Link to="/cart" > <PopperWrapper> <NavHeaderItem notSlug icon={<ShoppingCartOutlined />} title="Giỏ Hàng" /></PopperWrapper></Link>


                <div className="header-sub-cart" style={{
                    display: showCart === false ? "none" : ""
                }}>



                    {listItem.length > 0 && (
                        <PopperWrapper bubble >
                            <div className="header-sub-cart-wrapper">
                                <div className="cart-main">


                                    {listItem && (

                                        listItem.map((item) => {


                                            return (<div className="cart-item" key={item.id}>
                                                <div className="item__image">
                                                    <Image src={item.product.image} />
                                                </div>
                                                <div className="item__title">
                                                    {item.product.title}
                                                </div>

                                                <div className="item-info">
                                                    <div className="item__info--price">
                                                        {FormatPrice(item.product.newPrice)}
                                                    </div>
                                                    <div className="item__info--quantity">
                                                        x{item.quantity}
                                                    </div>
                                                </div>
                                            </div>)
                                        })
                                    )}






                                </div>

                                <div className="cart-total">
                                    <div className="cart-total__quantity">
                                        Số Lượng: <span>{cartTotalQuantity}</span>
                                    </div>
                                    <div className="cart-total__price" >
                                        Tổng Tiền: <span>{FormatPrice(cartTotalPrice)}</span>
                                    </div>
                                </div>


                                <div className="cart-btn">

                                    <div className="cart-btn--detail">
                                        <Button to={"/cart"}>
                                            Xem Chi Tiết
                                        </Button>
                                    </div>
                                    <div className="cart-btn-remove">
                                        <Button onClick={handleRemoveOnClick}>
                                            Xóa Toàn Bộ
                                        </Button>
                                    </div>


                                </div>








                            </div>
                        </PopperWrapper>

                    )}

                    {listItem.length <= 0 && (

                        <div className='empty-cart'>
                            <Image src={emptyCart} />
                            <div className="empty-cart__title">
                                Giỏ Hàng Trống
                            </div>

                        </div>

                    )}

                </div>
            </div>








        </ul >
    );
}

export default memo(NavHeader);