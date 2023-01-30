import React from 'react';
import PropTypes from 'prop-types';

import AxiosClient from "./AxiosClient"

const ApiProduct = {

  async getAllProduct(newsParam) {



    const productList = await AxiosClient.get("/products", {
      params: {
        ...newsParam
      }

    });



    return {
      data: productList,

    }





    //   return AxiosClient.get(`/products?_start`,{

    //    params:{


    //    }
    //   }


    //   );

  },


  getProduct(productId) {

    return AxiosClient.get(`/products/${productId}`);

  },



}







export default ApiProduct;