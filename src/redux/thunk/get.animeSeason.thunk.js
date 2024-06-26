import { getRequest } from "../../API/api";
import { setAnimeData, addLoading, removeLoading, addError } from "../reducers/animeSlice.reducer";
import { dateForCurrentSeason } from "../../utils/currentSeason";
import { formatNumber } from "../../utils/formatNumber";
export const animeSeasonThunk = (page = 1) => async (dispatch, getState) => {

    const dateFromNow = dateForCurrentSeason();
    const { currentYear, season } = dateFromNow;
    const dateString = `${season} ${currentYear}`;

    //Loading => Await response 
    dispatch(addLoading());

    const response = await getRequest(`https://api.jikan.moe/v4/seasons/${dateFromNow.currentYear}/${dateFromNow.season}?page=${page}`)

    const data = response.data;
    const responseError = response.error;

    if (responseError) {
        console.error("Error in fetch", responseError);
        dispatch(removeLoading());
        dispatch(addError());

    }



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
        episodes: data.episodes != null ? data.episodes : 'unknown',
        favorites: formatNumber(data.favorites),
        genres: data.genres ? data.genres.map(g => ({ id: g.mal_id, name: g.name })) : [{ name: 'Unknown' }]

    }));

    const formatedData = {
        animeDetail,
        pagination,
        dateString
    }


    // Remove Loading  
    dispatch(removeLoading())

    console.log('thunk', formatedData)
    dispatch(setAnimeData(formatedData))


}