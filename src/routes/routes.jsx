import React from 'react';
import PropTypes from 'prop-types';
import Home from '../pages/home/Home';
import DetailProduct from '../pages/DetailProduct/DetailProduct';
import DetailProductLayout from '../layout/DetailProductLayout/DetailProductLayout';
import Cart from '../pages/Cart/Cart';
import CartLayout from '../layout/CartLayout/CartLayout';
import Category from '../pages/Category/Category';
import CategoryLayout from '../layout/CategoryLayout/CategoryLayout';
import LayoutModeSnowEffect from '../coponent/LayoutModeSnowEffect/LayoutModeSnowEffect';
import LayoutModeLunarNewYear from '../coponent/LayoutModeLunarNewYear/LayoutModeLunarNewYear';
import LayerNewYear from '../coponent/Layer/LayerNewYear';
import OrderCheck from '../pages/OrderCheck/OrderCheck'

export const publicRoutes = [
    {
        path: "/",
        element: Home,
        layoutMode: LayoutModeLunarNewYear,
        layer: LayerNewYear
        // layoutMode: LayoutModeSnowEffect
        // layout: null


    },


    // {
    //     path: "/pro",
    //     element: Home,
    //     // layout: null


    // }

    ,

    {
        path: "/products/:productId",
        element: DetailProduct,
        layout: DetailProductLayout,
        layoutMode: LayoutModeLunarNewYear,



    },

    {
        path: "/order/check",
        element: OrderCheck,
        layout: DetailProductLayout,
        layoutMode: LayoutModeLunarNewYear,



    },
    {
        path: "/cart",
        element: Cart,
        layout: CartLayout,
        layoutMode: LayoutModeLunarNewYear,




    },

    {
        path: "/:category",
        element: Category,
        layout: CategoryLayout,
        layoutMode: LayoutModeSnowEffect,



    },





]





