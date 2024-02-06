import { getRequest } from "../../API/api";
import { setData, addLoading, removeLoading } from "../reducers/animeSlice.reducer";


export const getAnimeIDThunk = (animeID) => async (dispatch, getState) => {

    const id = animeID;

    //Loading => Await response 
    dispatch(addLoading());


    const response = await getRequest(`https://api.jikan.moe/v4/anime/${id}/full`)
    const data = response.data

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
        title_jap: data.data.title_japanese,
        image: data.data.images.webp.large_image_url,
        status: data.data.status,
        season: data.data.season.charAt(0).toUpperCase() + data.data.season.slice(1),
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

    }
    // console.log(data.data)
    // console.log(animeIDdata)
    console.log(animeIDdata.genre)
    if (response.error) {
        console.error("error in search anime :", response.error);
        dispatch(addError());
    }

    dispatch(setData(animeIDdata))

    // Remove Loading  
    dispatch(removeLoading())


}