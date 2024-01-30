import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: true,
    data: [],
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
        addError: (state) => {
            return {
                ...state,
                error: true,
            }
        },
        removeError: (state) => {
            return {
                ...state,
                error: false,
            }
        },




    }
})



export const { setData, addLoading, removeLoading, addError, removeError } = animeSlice.actions
export default animeSlice.reducer