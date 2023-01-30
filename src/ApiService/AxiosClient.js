import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { baseUrl } from '../constanst/UrlContanst';

const AxiosClient = axios.create({
  baseURL: baseUrl,
  // timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});



AxiosClient.interceptors.response.use(function (response) {
  // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
  // Làm gì đó với dữ liệu response
  return response;
}, function (error) {
  // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
  // Làm gì đó với lỗi response
  return Promise.reject(error);
})


export default AxiosClient;