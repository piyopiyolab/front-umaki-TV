import { putRequest } from "../../API/api";
import { APP_ROUTES } from "../../constants/routes.constants";
import { setUserData, addError, addLoading, removeError, removeLoading } from "../reducers/userSlice.reducer";

export const updateEmailThunk = (email) => async (dispatch, getState) => {

    const token = localStorage.getItem('accessToken');

    //Loading => Await response 
    dispatch(addLoading());

    const response = await putRequest(`${APP_ROUTES.API_URL}/dashboard/update-email`, email, token);


    const data = response.data;
    console.log(email)
    console.log(response, data);

    if (response.error) {
        console.error("Error in update email : ", response.error);
        dispatch(addError({ error: response.error }));

        return;
    }

    console.log(data);
    // Remove Loading  
    dispatch(removeLoading())

}