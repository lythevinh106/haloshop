import React from 'react';
import PropTypes from 'prop-types';

import { AxiosMainAuth } from "./AxiosMain"

const AuthApi = {


    register(data) {

        return AxiosMainAuth.post(`/auth/register`, data);



    },
    login(data) {

        return AxiosMainAuth.post(`/auth/login`, data);
    },

    refresh(refreshToken) {

        return AxiosMainAuth.post(`/auth/refresh/${refreshToken}`)
    },
    me() {

        // console.log(AxiosMainAuth)
        return AxiosMainAuth.post(`/auth/me`,


        )
    }
    ,
    addCartAuth(data) {

        return AxiosMainAuth.post(`/addCartAuth`, data


        )

    },
    // showCartAuth(userId) {

    //     return AxiosMainAuth.get(`/showCartAuth/${userId}`,


    //     )

    // },
    showCartAuth(userId, token) {

        return AxiosMainAuth.get(`/showCartAuth/${userId}`,
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }

        )

    },

    setQuantityAuth(data) {

        return AxiosMainAuth.post(`/updateCartAuth`, data


        )

    },

    deleteCartAuth(data) {

        return AxiosMainAuth.post(`/deleteCartAuth`, data


        )

    },

    removeAllCartAuth(data) {

        return AxiosMainAuth.post(`/removeAllCartAuth`, data


        )

    },
    paymentAuth(data) {

        return AxiosMainAuth.post(`/paymentAuth`, data


        )

    },

    updateInfo(data) {

        return AxiosMainAuth.post(`/auth/updateInfo`, data

        )

    },




}







export default AuthApi;