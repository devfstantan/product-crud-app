import { configureStore } from "@reduxjs/toolkit";
import { cateogoriesReducer } from "../features/categories/categoriesSlice";

const store = configureStore({
    reducer:{
        categories: cateogoriesReducer
    }
})

export default store;