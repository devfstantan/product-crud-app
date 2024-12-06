import { configureStore } from "@reduxjs/toolkit";
import { cateogoriesReducer } from "../features/categories/categoriesSlice";
import { productsReducer } from "../features/products/productsSlice";

const store = configureStore({
    reducer:{
        categories: cateogoriesReducer,
        products: productsReducer
    }
})

export default store;