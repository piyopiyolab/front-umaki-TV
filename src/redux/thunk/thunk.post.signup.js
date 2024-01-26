import { postRequest } from "../../API/api";
import { setData } from "../reducers/userSlice.reducer";

export const signUpThunk = (form) => async (dispatch, getState) => {

    const response = await postRequest("http://localhost:9001//connexion/sign-up", form)
    const data = response.data

    console.log(data)
    dispatch(setData(data.user))
    localStorage.setItem('accessToken', data.token);



};

