import { postRequest } from "../../API/api";
import { setUserData, addLoading, removeLoading, addError, removeError, setLoggedInStatus } from "../reducers/userSlice.reducer";
import { APP_ROUTES } from "../../constants/routes.constants";


export const logInThunk = (form) => async (dispatch, getState) => {


    //Loading => Await response 
    dispatch(addLoading());


    const response = await postRequest(`${APP_ROUTES.API_URL}${APP_ROUTES.LOG_IN}`, form);
    // const response = await postRequest("http://localhost:9001/connexion/log-in", form);

    const data = response.data;


    if (response.error) {
        console.error("Error in Log-in:", response.error,);
        dispatch(addError({ error: response.error }));

        return;
    }


    dispatch(setUserData(data.user));

    // Remove Loading  
    dispatch(removeLoading())


    //get Token from localStorage
    localStorage.setItem('accessToken', data.user.token);


    //Logged user success
    dispatch(setLoggedInStatus({ loggedIn: true, user_id: data.user.user_id }));

};
