import React from 'react';
import PropTypes from 'prop-types';

import AxiosMain from "./AxiosMain"

const CategoryApi = {

    getAllCategory(newsParam) {

        return AxiosMain.get("/category", {
            params: {
                ...newsParam
            }

        });



    },
    deleteCategory(id) {

        return AxiosMain.delete(`/category/${id}`, {

        });


    },

    addCategory(data) {

        return AxiosMain.post(`/category`, data);





    },
    updateCategory(id, data) {

        return AxiosMain.post(`/category/edit/${id}`, data);





    },
    showCategory(id) {

        return AxiosMain.get(`/category/${id}`);





    },

    // getProduct(productId) {

    //     return AxiosClient.get(`/products/${productId}`);

    // },



}







export default CategoryApi;