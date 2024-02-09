



import { setAnimeData, addLoading, removeLoading, addError, removeError } from "../reducers/animeSlice.reducer";
import { setUserData, setLoggedInStatus } from "../reducers/userSlice.reducer";


import { getRequest } from "../../API/api";


export const getUserList = () => async (dispatch, getState) => {


    const token = localStorage.getItem('accessToken');

    const isLoggedIn = !!token;

    //Loading => Await response
    dispatch(addLoading());
    try {

        const response = await getRequest("http://localhost:9001/user/dashboard", token);

        //const data = response.data
        const data = response.data.data.response.result

        dispatch(setAnimeData(data))

        if (isLoggedIn) {
            dispatch(setLoggedInStatus({ loggedIn: isLoggedIn }));
        }


        // Remove Loading
        dispatch(removeLoading())

    } catch (error) {
        console.error("Failed to fetch user's list:", error);

        dispatch(removeLoading());
        dispatch(addError());
    }


}