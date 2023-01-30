import React from 'react';
import PropTypes from 'prop-types';

import AxiosMain from "./AxiosMain"

const OrderApi = {


    checkOrder(order_token) {

        return AxiosMain.post(`/order/checkToken/` + order_token);



    },



}







export default OrderApi;