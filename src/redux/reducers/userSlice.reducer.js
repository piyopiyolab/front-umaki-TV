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



export const { setData, addLoading, removeLoading, addError, removeError } = userSlice.actions
export default userSlice.reducer