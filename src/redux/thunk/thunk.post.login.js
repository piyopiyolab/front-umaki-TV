import { postRequest } from "../../API/api";
import { setData } from "../reducers/userSlice.reducer";

export const logInThunk = (form) => async (dispatch, getState) => {

    const response = await postRequest("http://localhost:9001/connexion/log-in", form)
    const data = response.data

    console.log("API response:", response);

    dispatch(setData(data.user))
    localStorage.setItem('accessToken', data.user.token);
    console.log(data.user)



};
