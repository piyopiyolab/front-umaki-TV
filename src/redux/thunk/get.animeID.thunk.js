import { getRequest } from "../../API/api";
import { setAnimeData, addLoading, removeLoading } from "../reducers/animeSlice.reducer";


export const getAnimeIDThunk = (animeID) => async (dispatch, getState) => {

    const id = animeID;

    //Loading => Await response 
    dispatch(addLoading());


    const responseAnimeDetail = await getRequest(`https://api.jikan.moe/v4/anime/${id}/full`)
    const data = responseAnimeDetail.data

    //genre Format
    const genresData = data.data.genres.map(genre => ({
        name: genre.name,
    }));


    //StreamingURL Format
    const streamingData = data.data.streaming.map(stream => ({
        name: stream.name,
        url: stream.url
    }));

    //Producer Format
    const producersData = data.data.producers.map(producer => ({
        name: producer.name,
    }));


    //Studios Format
    const studiosData = data.data.studios.map(studio => ({
        name: studio.name,
    }));

    const animeIDdata = {
        title: data.data.title,
        title_eng: data.data.title_english,
        title_jap: data.data.title_japanese,
        image: data.data.images.webp.large_image_url,
        status: data.data.status,
        season: data.data.season ? data.data.season.charAt(0).toUpperCase() + data.data.season.slice(1) : null,
        year: data.data.year,
        rating: data.data.rating,
        genre: genresData,
        synopsis: data.data.synopsis,
        synonym: data.data.synonyms,
        duration: data.data.duration,
        source: data.data.source,
        producers: producersData,
        studios: studiosData,

        streaming: streamingData,
        trailer: data.data.trailer.url,

        episodes: data.data.episodes,

    }

    if (responseAnimeDetail.error) {
        console.error("error in anime infos :", responseAnimeDetail.error);
        dispatch(addError());
    }

    dispatch(setAnimeData(animeIDdata))

    // Remove Loading  
    dispatch(removeLoading())


}