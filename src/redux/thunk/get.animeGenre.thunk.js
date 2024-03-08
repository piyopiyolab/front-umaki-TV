import { getRequest } from "../../API/api";
import { setAnimeData, addLoading, removeLoading, addError } from "../reducers/animeSlice.reducer";
import { formatNumber } from "../../utils/formatNumber";

export const getAnimeGenreThunk = (genreID, page = 1) => async (dispatch, getState) => {

    const id = genreID;

    //Loading => Await response 
    dispatch(addLoading());
    console.log(`https://api.jikan.moe/v4/anime?genres=${id}?page=${page}`)

    const response = await getRequest(`https://api.jikan.moe/v4/anime?genres=${id}?page=${page}`)
    const data = response.data

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
    const pagination = data.pagination;

    const formatedData = { animeDetail, pagination }


    if (response.error) {
        console.error("error in genre anime infos :", response.error);
        dispatch(addError());
    }

    console.log("thunk", formatedData)

    dispatch(setAnimeData(formatedData))

    // Remove Loading  
    dispatch(removeLoading())


}