import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import wishlstSlice from "./slices/wishlstSlice";

const cartStore = configureStore({
    reducer:{
        productReducer : productSlice,
        wishlistReducer : wishlstSlice
    }
})

export default cartStore