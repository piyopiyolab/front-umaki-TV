import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    data: undefined,
    error: false
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setData: (state, action) => {
            return {
                ...state, data: action.payload
            }

        }, addLoading: (state) => {
            return {
                ...state,
                loading: true,
            };
        },
        removeLoading: (state) => {
            return {
                ...state,
                loading: false,
            };
        },




    }
})



export const { setData, addLoading, removeLoading } = userSlice.actions
export default userSlice.reducer