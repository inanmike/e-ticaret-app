import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState= {
    products: [],
    selectedProduct: {},
    loading: false
}

const BASE_URL = 'https://fakestoreapi.com';

export const getAllProducts = createAsyncThunk("getAllProduct", async() =>{
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
});

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSelectedProduct :  (state, action) =>{
            state.selectedProduct = action.payload;
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.loading = true; //'Pending' Bekleme durumundayken 

        }) 

        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            //
            state.loading = false;
            state.products = action.payload; // 'Fulfilled' işlemi tamamlandığında ürünleri state'a ekle
        });
    }
})

export const {setSelectedProduct} = productSlice.actions
export default productSlice.reducer