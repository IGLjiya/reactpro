import { createSlice } from "@reduxjs/toolkit"


const UrlSlice = createSlice({
    name: "url",
    initialState: {
        urlData: ""
    },
    reducers: {
        addURL: (state, action) => {
            const { payload } = action
            state.urlData = payload

        }
    }
})


export const { addURL } = UrlSlice.actions
export const { reducer: urlReducer } = UrlSlice