import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: true,
    data: [],
    error: null
}


export const animeSlice = createSlice({
    name: "anime",
    initialState,
    reducers: {
        setAnimeData: (state, action) => {
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
                error: action.payload.error,
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



export const { setAnimeData, addLoading, removeLoading, addError, removeError } = animeSlice.actions
export default animeSlice.reducer