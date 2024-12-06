import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../config/api";

// thunk that fetchs products from API
export const fetchProducts = createAsyncThunk(
    'products/list', 
    async (params = "_embed=categorie") => {
        const resp = await axiosClient.get('/products?'+params);
        return resp.data;
    }
)

// thunk that posts a new product to the API
export const createProduct = createAsyncThunk(
    'products/create', 
    async (newProduct) => {
        const resp = await axiosClient.post('/products',newProduct);
        return resp.data;
    }
)

// thunk that gets a product by id from api.
export const getProduct = createAsyncThunk(
    'products/getById', 
    async (id) => {
        const resp = await axiosClient.get(`products/${id}`);
        return resp.data;
    }
)

// thunk that updates a product
export const updateProduct = createAsyncThunk(
    'products/updateById', 
    async ({id, data}) => {
        const resp = await axiosClient.put(`products/${id}`,data);
        return resp.data;
    }
)

// thunk that deletes a products
export const deleteProduct = createAsyncThunk(
    'products/deleteById', 
    async (id) => {
        const resp = await axiosClient.delete(`products/${id}`);
        return resp.data;
    }
)


const productsSlice = createSlice({
    name:'products',
    initialState: {
        items:[],
        item: null,
        loading: false,
        error: null
    },
    reducers:{ },
    extraReducers: (builder) => {
        // 1- Fetch products Cases
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload

        }).addCase(fetchProducts.pending,(state, action) => {
                state.loading = true

        }).addCase(fetchProducts.rejected,(state, action) => {
                state.loading = false;
                state.error = action.error.message;
        });

        // 2- Create new product cases:
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload)

        }).addCase(createProduct.pending,(state, action) => {
                state.loading = true

        }).addCase(createProduct.rejected,(state, action) => {
                state.loading = false;
                state.error = action.error.message;
        });

        // 3- Fetch product by id
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.item = action.payload

        }).addCase(getProduct.pending,(state, action) => {
                state.loading = true
                state.item = null;

        }).addCase(getProduct.rejected,(state, action) => {
                state.loading = false;
                state.item = null;
                state.error = action.error.message;
        });

        // 4- update product by id
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.item = action.payload

        }).addCase(updateProduct.pending,(state, action) => {
                state.loading = true

        }).addCase(updateProduct.rejected,(state, action) => {
                state.loading = false;
                state.error = action.error.message;
        });

        // 5- delete product by id
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter(e => e.id !== action.payload.id)

        }).addCase(deleteProduct.pending,(state, action) => {
                state.loading = true

        }).addCase(deleteProduct.rejected,(state, action) => {
                state.loading = false;
                state.error = action.error.message;
        });
    }
})



export const productsReducer = productsSlice.reducer;