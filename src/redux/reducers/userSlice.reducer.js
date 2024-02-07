import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    data: undefined,
    error: null,
    loggedIn: false,
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action) => {
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
        setLoggedInStatus: (state, action) => {
            return {
                ...state,
                loggedIn: action.payload,
            }
        },



    }
})



export const { setUserData, addLoading, removeLoading, addError, removeError, setLoggedInStatus } = userSlice.actions
export default userSlice.reducer