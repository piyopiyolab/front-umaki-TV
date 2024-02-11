import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: true,
    data: [],
    error: null
}


export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        removeError: (state, action) => {
            return {
                ...state,
                error: false,
            }
        },




    }
})



export const { } = darkModeSlice.actions
export default darkModeSlice.reducer