import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../config/api";

// thunk that fetchs categories from API
export const fetchCategories = createAsyncThunk(
    'categories/list', 
    async () => {
        const resp = await axiosClient.get('/categories');
        return resp.data;
    }
)

// thunk that posts a new category to the API
export const createCategory = createAsyncThunk(
    'categories/create', 
    async (newCategory) => {
        const resp = await axiosClient.post('/categories',newCategory);
        return resp.data;
    }
)

// thunk that gets a catgory by id from api.
export const getCategory = createAsyncThunk(
    'categories/getById', 
    async (id) => {
        const resp = await axiosClient.get(`categories/${id}`);
        return resp.data;
    }
)

// thunk that updates a category
export const updateCategory = createAsyncThunk(
    'categories/updateById', 
    async ({id, data}) => {
        const resp = await axiosClient.put(`categories/${id}`,data);
        return resp.data;
    }
)

// thunk that deletes a category
export const deleteCategory = createAsyncThunk(
    'categories/deleteById', 
    async (id) => {
        const resp = await axiosClient.delete(`categories/${id}`);
        return resp.data;
    }
)


const categoriesSlice = createSlice({
    name:'categories',
    initialState: {
        items:[],
        item: null,
        loading: false,
        error: null
    },
    reducers:{ },
    extraReducers: (builder) => {
        // 1- Fetch Categories Cases
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload

        }).addCase(fetchCategories.pending,(state, action) => {
                state.loading = true

        }).addCase(fetchCategories.rejected,(state, action) => {
                state.loading = false;
                state.error = action.error.message;
        });

        // 2- Create new category cases:
        builder.addCase(createCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload)

        }).addCase(createCategory.pending,(state, action) => {
                state.loading = true

        }).addCase(createCategory.rejected,(state, action) => {
                state.loading = false;
                state.error = action.error.message;
        });

        // 3- Fetch Category by id
        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.item = action.payload

        }).addCase(getCategory.pending,(state, action) => {
                state.loading = true
                state.item = null;

        }).addCase(getCategory.rejected,(state, action) => {
                state.loading = false;
                state.item = null;
                state.error = action.error.message;
        });

        // 4- update Category by id
        builder.addCase(updateCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.item = action.payload

        }).addCase(updateCategory.pending,(state, action) => {
                state.loading = true

        }).addCase(updateCategory.rejected,(state, action) => {
                state.loading = false;
                state.error = action.error.message;
        });

        // 5- delete Category by id
        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter(e => e.id !== action.payload.id)

        }).addCase(deleteCategory.pending,(state, action) => {
                state.loading = true

        }).addCase(deleteCategory.rejected,(state, action) => {
                state.loading = false;
                state.error = action.error.message;
        });
    }
})



export const cateogoriesReducer = categoriesSlice.reducer;