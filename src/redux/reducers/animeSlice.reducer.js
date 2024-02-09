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

        }, addLoading: (state, action) => {
            return {
                ...state,
                loading: true,
            };
        },
        removeLoading: (state, action) => {
            return {
                ...state,
                loading: false,
            };
        },
        addError: (state, action) => {
            return {
                ...state,
                error: action.payload.error,
            }
        },
        removeError: (state, action) => {
            return {
                ...state,
                error: false,
            }
        },




    }
})



export const { setAnimeData, addLoading, removeLoading, addError, removeError } = animeSlice.actions
export default animeSlice.reducer