import { setData } from "../reducers/userSlice.reducer";
import { getRequest } from "../../API/api";


export const getUserList = () => async (dispatch, getState) => {


    const token = localStorage.getItem('accessToken');
    const response = await getRequest("http://localhost:9001/user/dashboard", token);
    const data = response.data


    dispatch(setData(data.user))

    console.log(data)

}