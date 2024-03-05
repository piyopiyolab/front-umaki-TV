import { getRequest } from "../../API/api";
import { setAnimeData, addLoading, removeLoading } from "../reducers/animeSlice.reducer";

export const topanimeThunk = (page = 1) => async (dispatch, getState) => {

    //Loading => Await response 
    dispatch(addLoading());


    const response = await getRequest(`https://api.jikan.moe/v4/top/anime?page=${page}`)
    const data = response.data
    const responseError = response.error

    if (responseError) {
        console.error("Error in fetch", responseError);
        dispatch(addError());
    }


    const sliderData = data.data.slice(0, 3);
    const restData = data.data.slice(3);
    const pagination = data.pagination;
    const formatedData = {
        sliderData,
        restData,
        pagination,
    }

    // Remove Loading  
    dispatch(removeLoading())

    dispatch(setAnimeData(formatedData))

};