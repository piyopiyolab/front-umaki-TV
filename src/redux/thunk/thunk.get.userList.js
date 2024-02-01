import { setData, addLoading, removeLoading, addError, removeError, setLoggedInStatus } from "../reducers/userSlice.reducer";
import { getRequest } from "../../API/api";


export const getUserList = () => async (dispatch, getState) => {


    const token = localStorage.getItem('accessToken');
    //const isLoggedIn = !!token;
    const isLoggedIn = false;
    //Loading => Await response 
    dispatch(addLoading());


    const response = await getRequest("http://localhost:9001/user/dashboard", token);

    //const data = response.data
    const data = response.data.data.response.result
    dispatch(setLoggedInStatus(isLoggedIn));


    if (response.error) {
        console.error("Error favorite user's List:", error);
        dispatch(removeLoading())
        dispatch(addError());
    }


    dispatch(setData(data))



    // Remove Loading  
    dispatch(removeLoading())



}