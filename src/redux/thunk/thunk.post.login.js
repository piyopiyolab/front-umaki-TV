import { postRequest } from "../../API/api";
import { setData } from "../reducers/userSlice.reducer";

export const logInThunk = (form) => async (dispatch, getState) => {

    const response = await postRequest("http://localhost:9001/connection/log-in", form)
    const data = response.data

    console.log(data)
    dispatch(setData(data.user))



};
