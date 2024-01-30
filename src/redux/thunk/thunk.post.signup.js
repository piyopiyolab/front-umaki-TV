import { postRequest } from "../../API/api";
import { setData, addLoading, removeLoading, addError, removeError, setLoggedInStatus } from "../reducers/userSlice.reducer";

export const signUpThunk = (form) => async (dispatch, getState) => {
    try {
        dispatch(addLoading());

        const response = await postRequest("http://localhost:9001/connexion/sign-up", form)
        const data = response.data

        console.log(data)
        dispatch(setData(data.user))

        //set Token from localStorage

        localStorage.setItem('accessToken', data.token);

    } catch (error) {
        console.error("Error signUp:", error);
        dispatch(addError());
    } finally {
        dispatch(removeLoading());
    }


};

