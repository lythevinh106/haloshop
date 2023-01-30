import React from 'react';
import PropTypes from 'prop-types';

import AxiosMain from "./AxiosMain"

const ProductApi = {

    getAllProduct(newsParam) {

        return AxiosMain.get("/products", {
            params: {
                ...newsParam
            }

        });



    },


    showProduct(id) {

        return AxiosMain.get(`/product/${id}`, {

        });



    },

    showProductsOfCategory(category_id, param) {

        return AxiosMain.get(`/product/ofCategory/${category_id}`, {
            param
        });



    },


    // showProductsOfCategory(slug) {

    //     return AxiosMain.get(`/products/ofCategory/${slug}`, {

    //     });



    // },


    deleteProduct(id) {

        return AxiosMain.delete(`/product/${id}`, {



        });



    },
    addProduct(data) {

        return AxiosMain.post(`/product`, data,
            { headers: { 'content-type': 'multipart/form-data; boundary=<calculated when request is sent>' } }
        )
        // .catch(function (error) {
        //     console.log(error.toJSON());
        // });;





    },


    updateProduct(id, data) {

        return AxiosMain.post(`/product/edit/${id}`, data,
            { headers: { 'content-type': 'multipart/form-data; boundary=<calculated when request is sent>' } }
        )
        // .catch(function (error) {
        //     console.log(error.toJSON());
        // });;





    },

    getAllProductImages(id) {
        return AxiosMain.get(`/productImages/${id}`, {

        });
    },





}







export default ProductApi;