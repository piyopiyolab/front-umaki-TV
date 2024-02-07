import { getRequest } from "../../API/api";
import { setAnimeData, addLoading, removeLoading, addError, removeError } from "../reducers/animeSlice.reducer"


export const searchAnimeThunk = (anime) => async (dispatch, getState) => {
    //Loading => Await response 
    dispatch(addLoading());


    const response = await getRequest(`https://api.jikan.moe/v4/anime?q=${anime}&sfw`)
    const data = response.data

    if (response.error) {
        console.error("Error in searching anime:", response.error);
        dispatch(addError());
    }


    // Remove Loading  
    dispatch(removeLoading())

    dispatch(setAnimeData(data.data))



}