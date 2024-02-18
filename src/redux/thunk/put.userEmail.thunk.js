import { putRequest } from "../../API/api";
import { APP_ROUTES } from "../../constants/routes.constants";
import { setUserData, addError, addLoading, removeError, removeLoading } from "../reducers/userSlice.reducer";

export const updateEmailThunk = (email) => async (dispatch, getState) => {

    const token = localStorage.getItem('accessToken');

    console.log(`url : ${APP_ROUTES.API_URL}/dashboard/update-email`)
    console.log('email :', email)
    console.log('token :', token)

    const response = await putRequest(`${APP_ROUTES.API_URL}/dashboard/update-email`, email, token);

    // dispatch(setUserData(data.user));


    if (response.error) {
        console.error("Error in update email : ", response.error);
        return;
    }


}