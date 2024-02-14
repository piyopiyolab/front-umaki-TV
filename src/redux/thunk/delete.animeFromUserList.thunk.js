import { postRequest } from "../../API/api";
import { setAnimeData, addLoading, removeLoading, addError, removeError } from "../reducers/animeSlice.reducer";
import { APP_ROUTES } from "../../constants/routes.constants";


export const deleteAnimeFromUserList = (anime_id) => async (dispatch, getState) => {

    const token = localStorage.getItem('accessToken');

    //Loading => Await response
    dispatch(addLoading());

    try {

        const response = await postRequest("http://localhost:9001/user/delete-anime", anime_id, token);
        // const response = await postRequest(`${APP_ROUTES.API_URL}/user/delete-anime`, anime_id, token);

        //const data = response.data
        const data = response.data

        dispatch(setAnimeData(data))

        // Remove Loading
        dispatch(removeLoading())

    } catch (error) {
        console.error("Failed delete anime from user's list:", error);

        dispatch(removeLoading());
        dispatch(addError());
    }




}