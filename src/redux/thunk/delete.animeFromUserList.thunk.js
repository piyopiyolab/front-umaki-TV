import { postRequest } from "../../API/api";
import { setAnimeData, addLoading, removeLoading, addError, removeError } from "../reducers/animeSlice.reducer";
import { APP_ROUTES } from "../../constants/routes.constants";


export const deleteAnimeFromUserList = (anime_id) => async (dispatch, getState) => {

    const token = localStorage.getItem('accessToken');
    console.log('thunk id', anime_id)
    //Loading => Await response
    dispatch(addLoading());

    // const response = await postRequest("http://localhost:9001/user/delete-anime", anime_id, token);
    const response = await postRequest("http://localhost:9001/user/delete-anime", { anime_id }, token);


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