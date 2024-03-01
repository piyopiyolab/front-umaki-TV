import { getRequest } from "../../API/api";
import { setAnimeData, addLoading, removeLoading } from "../reducers/animeSlice.reducer";
import { dateForCurrentSeason } from "../../utils/currentSeason";

export const animeSeasonThunk = () => async (dispatch, getState) => {

    const dateFromNow = dateForCurrentSeason();

    //Loading => Await response 
    dispatch(addLoading());

    const response = await getRequest(`https://api.jikan.moe/v4/seasons/${dateFromNow.currentYear}/${dateFromNow.season}`)

    const data = response.data


    const animeDetail = data.data.map(data => ({
        title: data.title,
        title_jap: data.title_japanese,
        image: data.images.webp.large_image_url,
        status: data.status,
        rating: data.rating,

        synopsis: data.synopsis,

        synonym: data.synonyms,
        duration: data.duration,
        source: data.source,
        episodes: data.episodes,
    }));

    console.log(animeDetail)


    if (response.error) {
        console.error("Error favorite user's List:", error);
        dispatch(addError());
    }


    // Remove Loading  
    dispatch(removeLoading())

    // dispatch(setAnimeData(data))

    dispatch(setAnimeData())

}