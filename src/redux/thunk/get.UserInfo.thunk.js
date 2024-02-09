import { setUserData, setLoggedInStatus, addError, addLoading, removeLoading } from "../reducers/userSlice.reducer";
import { getRequest } from "../../API/api";
import { APP_ROUTES } from "../../constants/routes.constants";

export const getUserInfos = () => async (dispatch, getState) => {

    const token = localStorage.getItem('accessToken');

    //Loading => Await response
    dispatch(addLoading());
    try {

        const response = await getRequest(`${APP_ROUTES.USER}/:userid`, token);

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