import { postRequest } from "../../API/api";
import { setAnimeData, addLoading, removeLoading, addError, removeError } from "../reducers/animeSlice.reducer";
import { APP_ROUTES } from "../../constants/routes.constants";


export const deleteAnimeFromUserList = (anime_state, anime_id) => async (dispatch, getState) => {

    const token = localStorage.getItem('accessToken');
    console.log('thunk id', anime_state, anime_id, `${APP_ROUTES.API_URL}/user/delete-anime/:userId/${anime_state}/${anime_id}`)
    //Loading => Await response
    dispatch(addLoading());

    const response = await postRequest(`${APP_ROUTES.API_URL}/user/delete-anime/:userId/${anime_state}/${anime_id}`, { anime_state, anime_id }, token);
    //ex API http://localhost:9001/user/delete-anime/499c40f6-27f8-4917-989a-279f195d0997/watched/2

    const data = response.data

    dispatch(setAnimeData(data))

    // Remove Loading
    dispatch(removeLoading())

    if (response.error) {
        console.error("Error deleting anime : ", response.error);
        dispatch(addError({ response }));

        return;
    }




}