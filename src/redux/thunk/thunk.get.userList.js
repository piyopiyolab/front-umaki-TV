import { setData, addLoading, removeLoading, addError, removeError, setLoggedInStatus } from "../reducers/userSlice.reducer";
import { getRequest } from "../../API/api";


export const getUserList = () => async (dispatch, getState) => {

    try {
        dispatch(addLoading());
        const token = localStorage.getItem('accessToken');
        const response = await getRequest("http://localhost:9001/user/dashboard", token);
        const data = response.data


        dispatch(setData(data.user))
    }

    catch (error) {
        console.error("Error favorite user's List:", error);
        dispatch(addError());

    } finally {
        dispatch(removeLoading());
    }

}