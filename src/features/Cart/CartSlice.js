import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import Item from 'antd/es/list/Item';
import { AxiosError } from 'axios';
import { useSelector } from 'react-redux';
import AuthApi from '../../Service/Auth';





export const addCartAuth = createAsyncThunk(

    'cart/addCartAuth',
    async (payload, thunkApi) => {



        // Gọi lên API backend

        // return payload;
        const data =
        {
            product_id: payload.id,
            user_id: JSON.parse(localStorage.getItem("user")).id,
            quantity: payload.quantity

        }


        try {
            const response = await AuthApi.addCartAuth(data);
            if (response.original.status == 200) {
                thunkApi.dispatch(addToCart(payload));
                return payload;
            }


        } catch (error) {

        }


    }

);



export const setQuantityAuth = createAsyncThunk(

    'cart/setQuantityAuth',
    async (payload, thunkApi) => {



        // Gọi lên API backend

        // return payload;
        const data =
        {
            product_id: payload.id,
            user_id: JSON.parse(localStorage.getItem("user")).id,
            quantity: payload.number

        }


        try {
            const response = await AuthApi.setQuantityAuth(data);
            if (response.original.status == 200) {
                thunkApi.dispatch(setQuantity(payload));
                return payload;
            }


        } catch (error) {

        }


    }

);


export const removeAuthItem = createAsyncThunk(

    'cart/removeAuthItem',
    async (payload, thunkApi) => {

        // return payload;



        // Gọi lên API backend

        // return payload;
        const data =
        {
            product_id: payload,
            user_id: JSON.parse(localStorage.getItem("user")).id,


        }


        try {
            const response = await AuthApi.deleteCartAuth(data);
            if (response.original.status == 200) {
                thunkApi.dispatch(removeItem(payload));
                return payload;
            }


        } catch (error) {

        }


    }

);



export const removeAllAuthItem = createAsyncThunk(

    'cart/removeAllAuthItem',
    async (payload, thunkApi) => {





        // Gọi lên API backend

        // return payload;
        const data =
        {

            user_id: payload,


        }


        try {
            const response = await AuthApi.removeAllCartAuth(data);
            if (response.original.status == 200) {
                thunkApi.dispatch(RemoveAll());
                return payload;
            }


        } catch (error) {

        }


    }

);



export const paymentAuth = createAsyncThunk(

    'cart/paymentAuth',
    async (payload, thunkApi) => {





        // Gọi lên API backend

        // return payload;
        const data =
        {

            user_id: payload.id,
        }

        try {
            const response = await AuthApi.paymentAuth(data);
            if (response.original.status == 200) {

                return response;
            }


        } catch (error) {

        }


    }

);






const initialState = JSON.parse(localStorage.getItem('cart')) || [];


console.log(initialState);


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: initialState.showMiniCart || false,

        cartItems: initialState.cartItems || []
    },
    reducers: {
        increment: (state) => {

            state.value += 1
        },
        resetCart: (state, action) => {
            state.cartItems = [];

        }
        ,

        addToCart: (state, action) => {

            const newItem = action.payload;

            const index = state.cartItems.findIndex((item) => {

                return item.id === newItem.id
            })

            if (index >= 0) {
                state.cartItems[index].quantity += newItem.quantity


            }
            else {

                state.cartItems.push({
                    id: newItem.id,
                    product: newItem.product,
                    quantity: newItem.quantity
                })

            }
            localStorage.setItem('cart', JSON.stringify(state));

        },

        ToggleCart: (state, action) => {

            state.showMiniCart = action.payload
            localStorage.setItem('cart', JSON.stringify(state));
        },
        RemoveAll: (state) => {


            state.cartItems = [];
            localStorage.setItem('cart', JSON.stringify(state));


        },

        removeItem: (state, action) => {

            const idRemove = action.payload;

            const index = state.cartItems.findIndex((item) => {

                return item.id === idRemove;
            })

            if (index >= 0) {
                state.cartItems.splice(index, 1);
            }

            localStorage.setItem('cart', JSON.stringify(state));


        },


        setQuantity: (state, action) => {

            const item = action.payload;



            const index = state.cartItems.findIndex((cart_item) => {

                return cart_item.id === item.id;
            })

            // console.log(index);

            if (index >= 0) {
                state.cartItems[index].quantity = item.number
            }

            localStorage.setItem('cart', JSON.stringify(state));


        },





    },


    extraReducers: (builder) => {
        // Bắt đầu thực hiện action login (Promise pending)


        builder.addCase(addCartAuth.fulfilled, (state, action) => {

            // return dispatch => {
            //     dispatch(addToCart);

            // }



            // return action.payload;

        });


        builder.addCase(setQuantityAuth.fulfilled, (state, action) => {
            // console.log(action.payload);
            // return dispatch => {
            //     dispatch(addToCart);

            // }



            // return action.payload;

        });

        builder.addCase(removeAuthItem.fulfilled, (state, action) => {
            console.log(action.payload);


        });

        builder.addCase(removeAllAuthItem.fulfilled, (state, action) => {
            console.log(action.payload);


        });
        builder.addCase(paymentAuth.fulfilled, (state, action) => {
            console.log(action.payload);


        });



    }

}
)


export const { addToCart, ToggleCart, RemoveAll, removeItem, setQuantity, resetCart } = cartSlice.actions

export default cartSlice




