import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllProducts, getSingleProductInfo } from './../service/productServer';

const initialState = {
    isLoading: false,
    product: [],
    cart: [],
    singleProduct: null
}

export const getProducts = createAsyncThunk('product/getAll', async(thunkApi) => {
    try {
        return await getAllProducts()
    } catch (error) {
        return thunkApi.rejectedWithValue(error)
    }
})

export const getSingleProduct = createAsyncThunk('product/getSingle', async(id, thunkApi) => {
    try {
        return await getSingleProductInfo(id)
    } catch (error) {
        return thunkApi.rejectedWithValue(error)
    }
})

export const productSlice = createSlice({
    name: 'getProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.product = action.payload.products
            })
            .addCase(getSingleProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSingleProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.singleProduct = action.payload
            })
    }
})

export default productSlice.reducer;