import { setUserData, setLoggedInStatus, addError, addLoading, removeLoading } from "../reducers/userSlice.reducer";
import { getRequest } from "../../API/api";

export const getUserInfos = () => async (dispatch, getState) => {

    const token = localStorage.getItem('accessToken');


    // const state = getState();

    // const user_id = state.userSlice.user_id;


    //Loading => Await response
    dispatch(addLoading());
    try {

        const response = await getRequest(`http://localhost:9001/dashboard/user`, token);
        //const data = response.data
        const data = response.data


        dispatch(setUserData(data))


        // Remove Loading
        dispatch(removeLoading())
    } catch (error) {
        console.error("Failed to fetch user's infos:", error);

        dispatch(removeLoading());
        dispatch(addError());
    }

}