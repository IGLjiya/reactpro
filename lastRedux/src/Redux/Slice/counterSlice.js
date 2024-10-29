import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 10
    },
    reducers: {
        increament: (state, action) => {
            state.counter += action.payload.num

        },
        decreament: (state, action) => {
            state.counter -= action.payload.num

        }
    }
})


export const { increament, decreament } = counterSlice.actions

export const { reducer: counterReducer } = counterSlice