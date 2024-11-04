import { configureStore } from "@reduxjs/toolkit";
import { urlReducer } from "./Slice/UrlSlice";


export const store = configureStore({
    reducer:{
        url:urlReducer
    }
})
