import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { responsiveArray } from 'antd/es/_util/responsiveObserve';
import axios, { AxiosError } from 'axios';
import { json } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthApi from '../../Service/Auth';
import AxiosMain from '../../Service/AxiosMain';




export const login = createAsyncThunk(

    'user/login',
    async (payload) => {
        // Gọi lên API backend

        const response = await AuthApi.login(payload);
        const userId = response.user.id;

        try {
            if (response.status == 201) {
                localStorage.setItem("jwt", response.authorisation.token);
                localStorage.setItem("refresh_token", response.authorisation.refresh_token);
                localStorage.setItem("user", JSON.stringify(response.user));
                localStorage.removeItem("cart");

                const responseCart = await AuthApi.showCartAuth(userId, response.authorisation.token);
                const dataCart = {
                    cartItems: responseCart.original.data
                }
                console.log(dataCart);
                localStorage.setItem("cart", JSON.stringify(dataCart));
                // response["cart"] = dataCart;
            }


        } catch (error) {

            console.log(AxiosError);

        }




        return response;

        // localStorage.setItem("access_token",)


        // console.log(response)
        // Convert dữ liệu ra json

    }

);



export const updateInfo = createAsyncThunk(

    'user/updateInfo',
    async (payload) => {
        // Gọi lên API backend



        try {

            const response = await AuthApi.updateInfo(payload);

            if (response.original.status == 201) {



                // localStorage.setItem("user", JSON.stringify(response.user));



                const newDataUser = {
                    ...response.original.data,



                }

                localStorage.setItem("user", JSON.stringify(newDataUser));





                return response;

            }


        } catch (error) {

            console.log(AxiosError);

        }






        // localStorage.setItem("access_token",)


        // console.log(response)
        // Convert dữ liệu ra json

    }

);





export const AuthSlice = createSlice({
    name: 'user',
    initialState: {

        currentUser: JSON.parse(localStorage.getItem("user")) || {},
        refresh_token: localStorage.getItem("refresh_token") || "",
        jwt: localStorage.getItem("jwt") || "",
        isLogin: false
    }
    ,
    reducers: {
        logOut: (state, action) => {
            localStorage.removeItem("jwt");
            localStorage.removeItem("user");
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("cart");
            state.currentUser = {}



        },
        setToken: (state, action) => {
            state.refresh_token = action.payload.refresh_token;
            state.jwt = action.payload.jwt;

        }

    },
    extraReducers: (builder) => {
        // Bắt đầu thực hiện action login (Promise pending)


        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload
            state.jwt = action.payload.authorisation.token;

            state.refresh_token = action.payload.authorisation.refresh_token;

            // return action.payload;

        });

        builder.addCase(updateInfo.fulfilled, (state, action) => {
            state.currentUser = action.payload.original.data
            // console.log(action.payload);
            // state.currentUser = action.payload
            // state.jwt = action.payload.authorisation.token;

            // state.refresh_token = action.payload.authorisation.refresh_token;

            // return action.payload;

        });


    }

})


export const { setToken, logOut } = AuthSlice.actions

export default AuthSlice