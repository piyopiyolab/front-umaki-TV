import { getRequest } from "../../API/api";
import { setAnimeData, addLoading, removeLoading } from "../reducers/animeSlice.reducer";
import { dateForCurrentSeason } from "../../utils/currentSeason";

export const animeSeasonThunk = () => async (dispatch, getState) => {

    const dateFromNow = dateForCurrentSeason();
    const { currentYear, season } = dateFromNow;
    const dateString = `${season} ${currentYear}`;

    //Loading => Await response 
    dispatch(addLoading());

    const response = await getRequest(`https://api.jikan.moe/v4/seasons/${dateFromNow.currentYear}/${dateFromNow.season}`)

    const data = response.data


    const pagination = data.pagination

    const animeDetail = data.data.map(data => ({
        mal_id: data.mal_id,
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

    const formatedData = {
        animeDetail,
        pagination,
        dateString
    }

    if (response.error) {
        console.error("Error in fetching anime from the current season:", error);
        dispatch(addError());
    }

    console.log(formatedData)
    dispatch(setAnimeData(formatedData))
    // Remove Loading  
    dispatch(removeLoading())
}