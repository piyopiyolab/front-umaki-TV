import { postRequest } from "../../API/api";
import { setData, addLoading, removeLoading } from "../reducers/userSlice.reducer";

export const postAnimeThunk = () => async (dispatch, getState) => {



    const token = localStorage.getItem('accessToken');

    const isLoggedIn = !!token;


    //Loading => Await response 
    dispatch(addLoading());

    const response = await postRequest("http://localhost:9001/user/add-anime", token);
    const data = response.data;

    if (response.error) {
        console.error("Error in :", error);
        dispatch(addError());
    }

    console.log(data);
    // Remove Loading  
    dispatch(removeLoading())


}

