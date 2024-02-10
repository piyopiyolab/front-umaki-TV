import { postRequest } from "../../API/api";
import { setUserData, addLoading, removeLoading, addError, removeError, setLoggedInStatus } from "../reducers/userSlice.reducer";
import { APP_ROUTES } from "../../constants/routes.constants";
export const signUpThunk = (form) => async (dispatch, getState) => {


    //Loading => Await response 
    dispatch(addLoading());


    const response = await postRequest(`${APP_ROUTES.API_URL}${APP_ROUTES.SIGN_UP}`, form)
    const data = response.data


    if (response.error) {
        console.error("Error in signup : ", response.error);
        dispatch(addError({ error: response.error }));

        return;
    }


    //set Token from localStorage
    localStorage.setItem('accessToken', data.token);
    dispatch(setUserData(data.user))


    // Remove Loading  
    dispatch(removeLoading())

    //Logged user success
    dispatch(setLoggedInStatus({ loggedIn: true, user_id: data.user.user_id }));




};

