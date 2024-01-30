import { postRequest } from "../../API/api";
import { setData, addLoading, removeLoading, addError, removeError, setLoggedInStatus } from "../reducers/userSlice.reducer";

export const logInThunk = (form) => async (dispatch, getState) => {

    try {
        dispatch(addLoading());

        const response = await postRequest("http://localhost:9001/connexion/log-in", form);
        const data = response.data;

        dispatch(setData(data.user));

        //get Token from localStorage
        localStorage.setItem('accessToken', data.user.token);

        //Logged user success
        dispatch(setLoggedInStatus(true));
    } catch (error) {
        console.error("Error logging in:", error);
        dispatch(addError());
    } finally {
        dispatch(removeLoading());
    }

};
