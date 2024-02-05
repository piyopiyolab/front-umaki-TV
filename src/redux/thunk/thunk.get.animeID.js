import { getRequest } from "../../API/api";
import { setData, addLoading, removeLoading } from "../reducers/animeSlice.reducer";



export const getAnimeIDThunk = (animeID) => async (dispatch, getState) => {

    const id = animeID;

    //Loading => Await response 
    dispatch(addLoading());


    const response = await getRequest(`https://api.jikan.moe/v4/anime/${id}/full`)
    const data = response.data


    const animeIDdata = {
        title: data.data.title,
        title_jap: data.data.title_japanese,
        image: data.data.images.webp.large_image_url,
        status: data.data.status,
        season: data.data.season,
        year: data.data.year,
        rating: data.data.rating,
        genre: data.data.genres,

    }
    console.log(data.data)
    console.log(animeIDdata)

    if (response.error) {
        console.error("error in search anime :", response.error);
        dispatch(addError());
    }

    dispatch(setData(animeIDdata))

    // Remove Loading  
    dispatch(removeLoading())


}