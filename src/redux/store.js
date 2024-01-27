import { configureStore } from "@reduxjs/toolkit";
import allProducts from './slice/productSlice'

export const store = configureStore({
    reducer: {
        products: allProducts
    }
})