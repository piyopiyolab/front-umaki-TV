import { putRequest } from "../../API/api";
import { APP_ROUTES } from "../../constants/routes.constants";
import { setUserData, addError, addLoading, removeError, removeLoading } from "../reducers/userSlice.reducer";

export const updateAvatarThunk = (avatar) => async (dispatch, getState) => {

    const token = localStorage.getItem('accessToken');

    const response = await putRequest(`${APP_ROUTES.API_URL}/dashboard/update-avatar`, { avatar }, token);

    // dispatch(setUserData(data.user));

    if (response.error) {
        console.error("Error in avatar email : ", response.error);
        return;
    }


}