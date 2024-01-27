import { getRequest } from "../../API/api";
import { setData, addLoading, removeLoading } from "../reducers/animeSlice.reducer";

export const topanimeThunk = () => async (dispatch, getState) => {

    const response = await getRequest("https://api.jikan.moe/v4/top/anime")
    const data = response.data

    dispatch(setData(data.data))
    console.log(data.data)
    dispatch(removeLoading())


};

