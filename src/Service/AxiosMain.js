import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { baseUrl } from '../constanst/UrlContanst';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import AuthApi from './Auth';
import { useDispatch } from 'react-redux';


const jwtTokenLocal = localStorage.getItem("jwt") || null;


const AxiosMain = axios.create({
    baseURL: baseUrl,
    // timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtTokenLocal}`

    }
});


export const AxiosMainAuth = axios.create({
    baseURL: baseUrl,
    // timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtTokenLocal}`,
        // 'Access-Control-Allow-Origin': '*'

    }
});





const notify2 = () => toast.error(' thông tin đăng nhập không đúng', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#00483d",


    }

});



AxiosMainAuth.interceptors.request.use(async (config) => {
    let jwt = localStorage.getItem('jwt') || null;
    if (jwt) {



        config.headers.Authorization = 'Bearer ' + jwt;


    }




    return config
})

AxiosMainAuth.interceptors.response.use(async (response) => {

    return response?.data;
}, async (error) => {

    if (error.code = 401) {

        // if (localStorage.getItem("refresh_token").length > 0) {



        //     // console.log(error.response)

        //     // console.log("het han");
        //     // let newData = await AuthApi.refresh(localStorage.getItem("refresh_token"));

        // }



    }

    return Promise.reject(error);
}

)






AxiosMain.interceptors.response.use(async (response, config) => {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response



    return response.data;
}, async (error) => {

    return Promise.reject(error);
}

)





export default AxiosMain;