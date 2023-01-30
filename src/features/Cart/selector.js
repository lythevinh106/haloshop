import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const allCartItem = (state) => state.cart.cartItems;

export const totalQuantity = createSelector(
    allCartItem,
    (cart) => {

        return cart.reduce((total, currentItem) => {
            return total += currentItem.quantity
        }, 0)

    }

)




export const totalPrice = createSelector(
    allCartItem,
    (cart) => {



        return cart.reduce((total, currentItem) => {
            return total += (currentItem.product.newPrice) * (currentItem.quantity)
        }, 0)

    }

)