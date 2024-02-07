import { postRequest } from "../../API/api";
import { setUserData, addLoading, removeLoading, addError, removeError, setLoggedInStatus } from "../reducers/userSlice.reducer";

export const signUpThunk = (form) => async (dispatch, getState) => {


    //Loading => Await response 
    dispatch(addLoading());

    const response = await postRequest("http://localhost:9001/connexion/sign-up", form)
    const data = response.data
    console.log('signup tunk', response)


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
    dispatch(setLoggedInStatus(true));




};

