import { postRequest } from "../../API/api";
import { setData, addLoading, removeLoading, addError, removeError, setLoggedInStatus } from "../reducers/userSlice.reducer";

export const logInThunk = (form) => async (dispatch, getState) => {


    //Loading => Await response 
    dispatch(addLoading());


    const response = await postRequest("http://localhost:9001/connexion/log-in", form);
    const data = response.data;



    if (response.error) {
        console.error("Error in Log-in:", error);
        dispatch(addError());
    }


<<<<<<< HEAD


    dispatch(setData(data.user));

=======

    //get Token from localStorage
    localStorage.setItem('accessToken', data.user.token);
    dispatch(setData(data.user));

>>>>>>> 2c4a5f5732edf3a418e1288cb16f22265fff7f32
    // Remove Loading  
    dispatch(removeLoading())

    //get Token from localStorage
    localStorage.setItem('accessToken', data.user.token);

    //Logged user success
    dispatch(setLoggedInStatus(true));
    console.log(data)

};
