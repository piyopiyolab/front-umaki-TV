import { setData, addLoading, removeLoading, addError, removeError, setLoggedInStatus } from "../reducers/userSlice.reducer";
import { getRequest } from "../../API/api";


export const getUserList = () => async (dispatch, getState) => {


    const token = localStorage.getItem('accessToken');

    //Loading => Await response 
    dispatch(addLoading());


    const response = await getRequest("http://localhost:9001/user/dashboard", token);
    const data = response.data.data.response.result

    if (response.error) {
        console.error("Error favorite user's List:", error);
        dispatch(removeLoading())
        dispatch(addError());
    }


    dispatch(setData(data))
    console.log(data)


    // Remove Loading  
    dispatch(removeLoading())



}