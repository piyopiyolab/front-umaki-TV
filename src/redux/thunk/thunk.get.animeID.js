import { getRequest } from "../../API/api";
import { setData, addLoading, removeLoading } from "../reducers/animeSlice.reducer";



export const getAnimeIDThunk = (animeID) => async (dispatch, getState) => {

    const id = animeID;

    //Loading => Await response 
    dispatch(addLoading());


    const response = await getRequest(`https://api.jikan.moe/v4/anime/${id}/full`)
    const data = response.data

    if (response.error) {
        console.error("error in search anime :", response.error);
        dispatch(addError());
    }

    dispatch(setData(data.data))

    // Remove Loading  
    dispatch(removeLoading())


}