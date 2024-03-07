import { getRequest } from "../../API/api";
import { setAnimeData, addLoading, removeLoading, addError } from "../reducers/animeSlice.reducer";


export const getAnimeGenreThunk = (animeGenre) => async (dispatch, getState) => {

    const genre = animeGenre;

    //Loading => Await response 
    dispatch(addLoading());


    const response = await getRequest(`https://api.jikan.moe/v4/${genre}/anime`)
    const data = response.data


    if (response.error) {
        console.error("error in genre anime infos :", response.error);
        dispatch(addError());
    }

    dispatch(setAnimeData(data))

    // Remove Loading  
    dispatch(removeLoading())


}