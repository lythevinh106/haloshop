import React from 'react';
import PropTypes from 'prop-types';

import AxiosMain from "./AxiosMain"

const CartApi = {


    addCart(data) {

        return AxiosMain.post(`/cart`, data);



    },



}







export default CartApi;