import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: []
    },
    reducers: {
        addToList: (state, action) => {
            const { payload } = action
            state.todoList = [payload, ...state.todoList]
            console.log(state.todoList);
        },
        removeFromList: (state, action) => {
            const { Id } = action.payload
            state.todoList = state.todoList.filter((element)=>element.id != Id)
            console.log(state.todoList);

        },
        statusUpdated: (state, action) => {

        },
        updatedTimeAt: (state, action) => {

        }
    }
})

export const { addToList, removeFromList, statusUpdated, updatedAt } = todoSlice.actions
export const { reducer: todoReducer } = todoSlice
