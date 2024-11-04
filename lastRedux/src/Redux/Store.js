import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Slice/counterSlice";
import { todoReducer } from "./Slice/todoSlice";



export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    }
})