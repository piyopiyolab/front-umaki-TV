import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    data: undefined,
    error: false
}


export const animeSlice = createSlice({
    name: "anime",
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



export const { setData, addLoading, removeLoading } = animeSlice.actions
export default animeSlice.reducer