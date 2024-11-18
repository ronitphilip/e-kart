import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import wishlstSlice from "./slices/wishlstSlice";
import cartSlice from "./slices/cartSlice";

const cartStore = configureStore({
    reducer:{
        productReducer : productSlice,
        wishlistReducer : wishlstSlice,
        cartReducer : cartSlice
    }
})

export default cartStore