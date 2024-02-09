import { getRequest } from "../../API/api";
import { setAnimeData, addLoading, removeLoading } from "../reducers/animeSlice.reducer";

export const topanimeThunk = (page = 1) => async (dispatch, getState) => {

    //Loading => Await response 
    dispatch(addLoading());


    const response = await getRequest(`https://api.jikan.moe/v4/top/anime?page=${page}`)
    const data = response.data


    if (response.error) {
        console.error("Error favorite user's List:", error);
        dispatch(addError());
    }


    // Remove Loading  
    dispatch(removeLoading())

    dispatch(setAnimeData(data))
    // dispatch(setAnimeData(data.data))

    console.log(data);




};

