import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    userData: undefined,
    error: null,
    loggedIn: false,
    user_id: undefined,
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            return {
                ...state, userData: action.payload
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
                error: action.payload,
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
                loggedIn: action.payload.loggedIn,
                user_id: action.payload.user_id,
            }
        },




    }
})



export const { setUserData, addLoading, removeLoading, addError, removeError, setLoggedInStatus } = userSlice.actions
export default userSlice.reducer