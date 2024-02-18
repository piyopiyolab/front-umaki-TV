import { postRequest } from "../../API/api";
import { setUserData, addLoading, removeLoading, addError } from "../reducers/userSlice.reducer";

export const postAnimeThunk = (newAnime) => async (dispatch, getState) => {



    const token = localStorage.getItem('accessToken');

    const isLoggedIn = !!token;


    //Loading => Await response 
    dispatch(addLoading());

    const response = await postRequest("http://localhost:9001/user/add-anime", newAnime, token);
    const data = response.data;

    if (response.error) {
        console.error("Error in adding anime: ", response.error);
        dispatch(addError({ error: response.error }));

        return;
    }

    console.log(data);
    // Remove Loading  
    dispatch(removeLoading())


}

