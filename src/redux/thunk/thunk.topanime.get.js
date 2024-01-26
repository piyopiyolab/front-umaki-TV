import { getRequest } from "../../API/api";
import { setData } from "../reducers/animeSlice.reducer";

export const topanimeThunk = () => async (dispatch, getState) => {
    console.log('dispatch')
    const response = await getRequest("https://api.jikan.moe/v4/top/anime")
    const data = response.data

    console.log(data)
    dispatch(setData(data.anime))



};

